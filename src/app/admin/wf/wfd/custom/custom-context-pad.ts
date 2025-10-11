import { MessageService } from '@app/core';
import { isAny } from 'bpmn-js/lib/features/modeling/util/ModelingUtil';
import { DiagramEl, ElementType, Modeling,ConnectionShape,Parent,Label,Shape, ElementStyle, EventDef, StateShapeType } from '../models/bpmn';
import { CustomRules, Rule } from './custom-rules';
import { WfconditionsComponent } from '../../components/wfconditions/wfconditions.component';
import { State } from '../models/wf.model';
import { COLORS } from '../util/bpmn'; // Import COLORS from your BPMN model
import { SharedData } from './share-data';



export class CustomContextPad<T extends ConnectionShape, U extends DiagramEl, V extends Label, W extends Parent, X extends Shape> {
  msg : MessageService;
  private wfid: string | undefined; // Global variable to store the WFID\
  element: StateShapeType;
  wfsrvc: any;
  dataSource: any;
  private currentColorPickerContainer: HTMLDivElement | null = null;
  private currentColorInput: HTMLInputElement | null = null;
  selectedPad = null;
  previousElement = null;
  _isAiFlow = location.pathname?.includes('ai-flow')

  constructor(
    
    private _eventBus: any,
    private _contextPad: any,
    private _modeling: Modeling<T, U, V, W, X>,
    private _connect: any,
    private _rules: CustomRules,
    private readonly _elementRegistry: any,
    private _sharedData: SharedData
  ) {

    this._contextPad.registerProvider(this);
    // Listen for elements being added to the diagram
    this._eventBus.on('elements.changed', (event: any) => {
      const allElements = this._elementRegistry.getAll();

      allElements.forEach((element: any) => {
        if (element.type === 'bpmn:Participant') {
          this.isStageElement(element);
        }
      });
    });

    this._eventBus.on('selection.changed', (event: any) =>{
      const firsChild = event.newSelection[0];
      if(firsChild?.children?.length === 0 && firsChild.type !== 'bpmn:Lane'){
        this.updateParent(firsChild);
      }

      if(event.newSelection.length > 1 || firsChild?.type === 'bpmn:Lane'){
        this.addLassoToolColorPicker(event.newSelection);
        this.removeLassoToolAlignment('align-elements');

      }

    });
    // Attach the tap/click event listener on BPMN elements
    let clickTimeout: any;
    let lastClickTime = 0;

    this._eventBus.on('element.click', 9001, (event: any) => {
      if (event.gfx.classList.contains("selected")) {
        event.stopPropagation();
      }

      const currentTime = new Date().getTime();
    
      // If the time between two clicks is very short, treat as double-click
      if (currentTime - lastClickTime < 300) {
        // It's a double-click
        if (clickTimeout) {
          clearTimeout(clickTimeout);
        }
    
        // Remove the tooltip if shown
        if (this.currentTextElement) {
          document.body.removeChild(this.currentTextElement);
          this.currentTextElement = null;
        }
    
        lastClickTime = 0; // reset
        return;
      }
    
      lastClickTime = currentTime;
    
      if (clickTimeout) {
        clearTimeout(clickTimeout);
      }
    
      clickTimeout = setTimeout(() => {
        const element = event.element;
    
        if (this.currentTextElement) {
          document.body.removeChild(this.currentTextElement);
          this.currentTextElement = null; // Clear the reference
        }
    
        if (this.isTriggerElement(element)) {
          const text =  element.props?.Description ?? element.props?.Name?? element.props?.Guid ?? element?.id;
          let result = (element.friendlyName && element.friendlyName.trim() !== "") ? element.friendlyName : text;
          result = result.replace(/^Cond_\*/, "");
          this.showTextOnElement(event.originalEvent, element, result);
        }
      }, 250); // Short delay to check for double-click
    });

    this._eventBus.on('canvas.viewbox.changed', 9001, () => {
      if (this.currentTextElement) {
        document.body.removeChild(this.currentTextElement);
        this.currentTextElement = null;
      }
    });

    this._eventBus.on('commandStack.shape.move.executed', (event: any) => {
      console.log('[shape.move] Moved:', event.context.shape);
      this.storeInSession('ElementMoved', event.context.shape);
    });
    this._eventBus.on('commandStack.connection.updateWaypoints.executed', (event: any) => {
      const conn = event.context.connection;
      this.storeInSession('ElementMoved', conn);
    });
  }
  WFId: string = "";
  wfosId:string="";
  WfoId:string="";

  private static $inject = [
    'eventBus',
    'contextPad',
    'modeling',
    'connect',
    'rules',
    'elementRegistry',
    'sharedData'
  ];

  private storeInSession(eventName: string, payload: any): void {
    const key = 'event';
    sessionStorage.setItem(key, JSON.stringify(eventName));
  }

  private isTriggerElement(element: DiagramEl): boolean {
    return element.type === ElementType.Trigger; // Adjust based on how you identify trigger elements
  }

  private isStageElement(element: DiagramEl) {
    this.wfid = element.props.WFID;
    console.log(this.wfid);
  }
  private currentTextElement: HTMLDivElement | null = null; // Keep track of the current text element

  
  private onDragDotted(...args: any[]): any {
    this._sharedData.setConnectionType('dotted');
   return this._connect.start(...args);
  }

  private showTextOnElement(event: MouseEvent, element: DiagramEl, text: string) {
 

    // Remove existing text element if present
    if (this.currentTextElement) {
      document.body.removeChild(this.currentTextElement);
    }

    // Create a new text element
    const deleteTextElement = document.createElement('div');
    deleteTextElement.innerText = text;
    deleteTextElement.style.position = 'absolute';
    deleteTextElement.style.color = 'white';
    deleteTextElement.style.backgroundColor = 'black';
    deleteTextElement.style.marginLeft = '0px';
    deleteTextElement.style.padding = '5px';
    deleteTextElement.style.borderRadius = '3px';
    deleteTextElement.style.fontSize = '12px';
    deleteTextElement.style.fontFamily = 'Museo Sans';
    deleteTextElement.style.zIndex = '9999'; // Ensure it appears on top

    document.body.appendChild(deleteTextElement);

    // Get mouse position
    const { clientX, clientY } = event;
    const textWidth = deleteTextElement.offsetWidth;
    const textHeight = deleteTextElement.offsetHeight;

    // Improved positioning to avoid trash icon overlap
    // Fixed left alignment and added more padding
    const offsetX = 15; // Increased horizontal offset
    const offsetY = 15; // Increased vertical offset

    // Position tooltip to the left and slightly above the cursor
    let leftPos = clientX - (textWidth + offsetX);
    let topPos = clientY - (textHeight + offsetY);

    // Prevent tooltip from going off-screen
    if (leftPos < 10) {
        leftPos = 10; // Ensure minimum distance from left edge
    }

    if (topPos < 10) {
        topPos = 10; // Ensure minimum distance from top edge
    }

    deleteTextElement.style.left = `${leftPos}px`;
    deleteTextElement.style.top = `${topPos}px`;

    // Store the current text element
    this.currentTextElement = deleteTextElement;

    // Remove text on click
    deleteTextElement.addEventListener('click', () => {
      if (this.currentTextElement) {
        document.body.removeChild(this.currentTextElement);
            this.currentTextElement = null;
      }
    });
  }


  private addLassoToolColorPicker(newSelection){
    setTimeout(() => {
       const groupDiv = document.querySelector('.djs-context-pad.open');
       if(!groupDiv) return;

       const existingDiv = groupDiv.querySelector('.entry[data-action="elements-color"]');
       if(existingDiv) return; 
       
       const newDiv = document.createElement('div');
       newDiv.classList.add('entry', 'fas', 'fa-solid', 'fa-brush', 'my-2');
       newDiv.setAttribute('draggable', 'true');
       newDiv.setAttribute('data-action', 'elements-color');
       newDiv.setAttribute('title', 'Elements Color');
     
       newDiv.addEventListener('click', ()=> {
        newSelection.newDiv = newDiv;
        this.showColorPicker(newSelection)
        this.selectedPad = 'lasso-color'
      });

       groupDiv.appendChild(newDiv);

       this.previousElement = newSelection;
      
     });
  }
  private removeLassoToolAlignment(group) {
    const divToRemove = document.querySelector(`div[data-group="${group}"]`);
    if (divToRemove) {
        divToRemove.remove();
    }
  }

  private updateParent(element){
    if(!element) return;
    const stages = Object.values(this._elementRegistry._elements)
                         .map((e: any) => e.element)
                         .filter(v => v.type === 'bpmn:Lane');
      
    if(stages.length > 0){
      stages.forEach(stage =>{
        const { x, y, width, height } = stage;
        const { x: x1, y: y1, width: width1, height: height1 } = element;
        const isContained = (
             x1 >= x && 
             y1 >= y && 
             (x1 + width1) <= (x + width) && 
             (y1 + height1) <= (y + height)
           );

        if(isContained){
          element.parent = stage;
        }
      })
    }
  }

  private showColorPicker(element: DiagramEl) {
    // Close any existing color picker first
    const isArrayOfElements = Array.isArray(element);
    this.closeExistingColorPicker();
    let htmlElement = this._elementRegistry.getGraphics(element);


    if(isArrayOfElements){
      htmlElement = this._elementRegistry.getGraphics(element[0]);
    }
  // Get element position
  const elementRect = isArrayOfElements ? element.newDiv.getBoundingClientRect(): htmlElement?.getBoundingClientRect();
  
  // Create main container
  const colorPickerContainer = this.createColorPickerContainer();
    this.currentColorPickerContainer = colorPickerContainer;
    
  // Create header with title and close button
  const headerContainer = this.createHeaderContainer();
  colorPickerContainer.appendChild(headerContainer);
  const updatedElement = isArrayOfElements ? element[0]?.children[0]: element;
  // Create hex input field and related controls
  const hexInput = this.createHexInputSection(updatedElement, colorPickerContainer);
  
    // Create basic colors palette
    const basicColors = [
      // Reds
      '#FF6B6B', '#FF4040', '#CC0000', '#990000', '#660000',
      // Oranges/Browns
      '#FFAB76', '#FF8000', '#CC6600', '#994C00', '#663300',
      // Yellows
      '#FFDA83', '#FFCC00', '#CCCC00', '#999900', '#666600',
      // Greens
      '#CAFFBF', '#80FF40', '#40CC00', '#339900', '#1A6600',
      // Teals
      '#9BF6FF', '#33CCCC', '#009999', '#006666', '#003333',
      // Blues
      '#A0C4FF', '#3399FF', '#0066CC', '#003399', '#000066',
      // Purples
      '#BDB2FF', '#9966FF', '#7733CC', '#4C0099', '#330066',
      // Pinks
      '#FFD6FF', '#FF99CC', '#FF3399', '#CC0066', '#990033',
      // Grays
      '#FFFFFF', '#CCCCCC', '#999999', '#666666', '#333333'
    ];

    // Create color palette container
    const paletteContainer = document.createElement('div');
    this.createColorPalette(paletteContainer, basicColors, 5, element, hexInput);
    colorPickerContainer.appendChild(paletteContainer);
  
  // Position the color picker properly
  this.positionColorPicker(colorPickerContainer, elementRect);
  
  // Add event handler for clicking outside
  this.setupOutsideClickHandler(colorPickerContainer);
  
    // Add to DOM
    document.body.appendChild(colorPickerContainer);
}

private createColorPickerContainer(): HTMLDivElement {
  const container = document.createElement('div');
  
  // Set initial styles
  container.style.position = 'absolute';
  container.style.backgroundColor = '#ffffff';
  container.style.border = '1px solid #cccccc';
  container.style.borderRadius = '4px';
  container.style.padding = '8px';
  container.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
  container.style.zIndex = '999';
  container.style.width = '235px';
  container.style.fontFamily = 'Museo Sans, Arial, sans-serif';
  container.style.maxHeight = '62vh';
  container.style.overflowX = 'auto';
  container.style.overflowY = 'auto';
  
  return container;
}

private createHeaderContainer(): HTMLDivElement {
    const headerContainer = document.createElement('div');
    headerContainer.style.display = 'flex';
    headerContainer.style.justifyContent = 'space-between';
    headerContainer.style.alignItems = 'center';
    headerContainer.style.marginBottom = '10px';
  
  const title = document.createElement('span');
  title.innerText = 'Fill Color';
  title.style.fontFamily = 'Museo Sans';
  title.style.fontWeight = 'bold';
  title.style.marginBottom = '10px';
  title.style.paddingTop= '5px';
  title.style.fontSize = '14px';
    headerContainer.appendChild(title);

    const closeButton = document.createElement('span');
    closeButton.classList.add('fas', 'fa-times-circle', 'fa-fw'); 
   
  closeButton.addEventListener('click', () => this.closeExistingColorPicker());
    headerContainer.appendChild(closeButton);
    
  return headerContainer;
}
    
private createHexInputSection(element: DiagramEl, container: HTMLDivElement): HTMLInputElement {
    const hexContainer = document.createElement('div');
    hexContainer.style.marginBottom = '12px';
    hexContainer.style.alignItems = 'center';
    
    const hexLabel = document.createElement('div');
    hexLabel.innerText = 'Hex:';
    hexLabel.style.fontSize = '12px';
    hexLabel.style.marginRight = '5px';
    hexLabel.style.fontFamily = 'Museo Sans';
    hexLabel.style.fontWeight = '500';
    hexLabel.style.minWidth = '35px';
    hexContainer.appendChild(hexLabel);
    
    const hexInput = document.createElement('input');

    hexInput.type = 'text';
    hexInput.value = element?.color==="none" ||element?.color===undefined?" ": element?.color;
    hexInput.style.width = '80px';
    hexInput.style.padding = '5px 7px';
    hexInput.style.border = '1px solid #ccc';
    hexInput.style.borderRadius = '3px';
    hexInput.style.fontFamily = 'Museo Sans';
    hexInput.style.fontSize = '12px';
    hexInput.placeholder = '#RRGGBB';
    hexContainer.appendChild(hexInput);
  this.currentColorInput = hexInput;
  
  // Create dropper button
  const dropperButton = this.createDropperButton(element, hexInput);
  hexContainer.appendChild(dropperButton);
  
  // Create apply button
  const applyButton = this.createApplyButton(element, hexInput);
  hexContainer.appendChild(applyButton);
  
  container.appendChild(hexContainer);
  
  return hexInput;
}

private createDropperButton(element: DiagramEl, hexInput: HTMLInputElement): HTMLButtonElement {
    const dropperButton = document.createElement('button');
    dropperButton.title = 'Pick color from screen';
    dropperButton.classList.add('fas', 'fa-eye');
    dropperButton.style.marginLeft = '5px';
    dropperButton.style.padding = '5px 8px';
    dropperButton.style.border = '1px solid #ccc';
    dropperButton.style.borderRadius = '3px';
    dropperButton.style.backgroundColor = '#f0f0f0';
    dropperButton.style.cursor = 'pointer';
    dropperButton.style.fontSize = '12px';
    
    // Check if EyeDropper API is supported
    const isEyeDropperSupported = 'EyeDropper' in window;
    
    if (!isEyeDropperSupported) {
      dropperButton.style.opacity = '0.5';
      dropperButton.title = 'Color picking from screen not supported in this browser';
    }
    
    // Add dropper click event
    dropperButton.addEventListener('click', async () => {
      if (!isEyeDropperSupported) {
        alert('Your browser does not support the color picker tool. Try using Chrome or Edge.');
        return;
      }
      
      try {
        // Hide color picker temporarily during eyedropper selection
        if (this.currentColorPickerContainer) {
          this.currentColorPickerContainer.style.display = 'none';
        }
        
        // Use the EyeDropper API
        // @ts-ignore - TypeScript might not recognize the EyeDropper API yet
        const eyeDropper = new window.EyeDropper();
        const result = await eyeDropper.open();
        
        // Show color picker again
        if (this.currentColorPickerContainer) {
          this.currentColorPickerContainer.style.display = 'block';
        }
        
      // Update hex input value with picked color
        const pickedColor = result.sRGBHex;
        hexInput.value = pickedColor;
      
      // Update preview and element color
      if (this.currentColorPickerContainer) {
        const previewElement = this.currentColorPickerContainer.querySelector('[data-preview="true"]');
        if (previewElement instanceof HTMLElement) {
          previewElement.style.backgroundColor = pickedColor;
        }
      }
      
        this.updateElementColor(element, pickedColor);
      } catch (error) {
        // User canceled or error occurred
        console.log('Eyedropper was canceled or failed', error);
        
        // Show color picker again
        if (this.currentColorPickerContainer) {
          this.currentColorPickerContainer.style.display = 'block';
        }
      }
    });
    
  return dropperButton;
}
    
private createApplyButton(element: DiagramEl, hexInput: HTMLInputElement): HTMLButtonElement {
    const applyButton = document.createElement('button');
    applyButton.innerText = 'Apply';
    applyButton.style.fontFamily = 'Museo Sans';
    applyButton.style.marginLeft = '5px';
    applyButton.style.padding = '5px 10px';
    applyButton.style.border = '1px solid #ccc';
    applyButton.style.borderRadius = '3px';
    applyButton.style.backgroundColor = '#f0f0f0';
    applyButton.style.cursor = 'pointer';
    applyButton.style.fontSize = '12px';
  
  // Apply hex color when button is clicked
  applyButton.addEventListener('click', () => {
    let colorValue = hexInput.value;
    
    // Add # if missing
    if (!colorValue.startsWith('#')) {
      colorValue = '#' + colorValue;
    }
    
    // Validate hex color pattern
    if (/^#([0-9A-F]{3}){1,2}$/i.test(colorValue)) {
      if (this.currentColorPickerContainer) {
        const previewElement = this.currentColorPickerContainer.querySelector('[data-preview="true"]');
        if (previewElement instanceof HTMLElement) {
          previewElement.style.backgroundColor = colorValue;
        }
      }
      this.updateElementColor(element, colorValue);
    } else {
      hexInput.style.border = '1px solid red';
      setTimeout(() => {
        hexInput.style.border = '1px solid #ccc';
      }, 1000);
    }
  });
  
  // Also apply color when Enter is pressed
  hexInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      applyButton.click();
    }
  });
  
  // Update preview when hex input changes
  hexInput.addEventListener('input', (event: any) => {
    let colorValue = event.target.value;
    
    // Add # if missing when length is appropriate 
    if (colorValue.length === 6 && colorValue.charAt(0) !== '#') {
      colorValue = '#' + colorValue;
      hexInput.value = colorValue;
    }
    
    // Only update preview for valid colors
    if (/^#([0-9A-F]{3}){1,2}$/i.test(colorValue)) {
      if (this.currentColorPickerContainer) {
        const previewElement = this.currentColorPickerContainer.querySelector('[data-preview="true"]');
        if (previewElement instanceof HTMLElement) {
          previewElement.style.backgroundColor = colorValue;
        }
      }
    }
  });
  
  return applyButton;
}



private createColorPalette(
  container: HTMLElement,
  colors: string[],
  columns: number,
  element: DiagramEl,
  hexInput: HTMLInputElement,
 
) {
  const colorPalette = document.createElement('div');
  colorPalette.style.display = 'grid';
  colorPalette.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  colorPalette.style.gap = '5px';
  colorPalette.style.marginBottom = '15px';
  
  // Create color swatches
  colors.forEach(colorHex => {
    const swatch = document.createElement('div');
    swatch.style.backgroundColor = colorHex;
    swatch.style.width = '100%';
    swatch.style.height = '20px';
    swatch.style.cursor = 'pointer';
    swatch.style.borderRadius = '2px';
    swatch.style.border = '1px solid #ddd';
    
    // Highlight current color
    if (element.color === colorHex) {
      swatch.style.boxShadow = '0 0 0 2px #000';
    }
    
    // Color swatch click handler
    swatch.addEventListener('click', (event) => {
      hexInput.value = colorHex;
      if(this.selectedPad === 'lasso-color'){
        if(element[0].children.length > 0){
          element[0].children.forEach(item =>{
            this.updateElementColor(item, colorHex);
          })
        }else{
          element.forEach(item => {
            if(item.type !== 'bpmn:Lane'){
              this.updateElementColor(item, colorHex);
            }
          });
        }
        this.selectedPad = null;
        this.addLassoToolColorPicker(element);
        this.removeLassoToolAlignment('align-elements');
        this.closeExistingColorPicker();

        return;
      }
      this.updateElementColor(element, colorHex);
      
      // Update all swatches in this palette to remove highlight
      colorPalette.querySelectorAll('div').forEach(s => {
        (s as HTMLElement).style.boxShadow = 'none';
      });
      
      // Highlight this swatch
      swatch.style.boxShadow = '0 0 0 2px #000';
    });
    
    // Hover effect
    swatch.addEventListener('mouseover', () => {
      if (element.color !== colorHex) {
        swatch.style.boxShadow = '0 0 0 1px #666';
      }
    });
    
    swatch.addEventListener('mouseout', () => {
      if (element.color !== colorHex) {
        swatch.style.boxShadow = 'none';
      } else {
        swatch.style.boxShadow = '0 0 0 2px #000';
      }
    });
    
    // Add tooltip with hex value
    swatch.title = colorHex;
    
    colorPalette.appendChild(swatch);
  });
  
  container.appendChild(colorPalette);
}

  private positionColorPicker(container: HTMLDivElement, elementRect: DOMRect) {
    // Approximate dimensions
    const estimatedHeight = 400; 
    const estimatedWidth = 250;
    
    // Get viewport dimensions
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    
    // Calculate available space in each direction
    const spaceBelow = viewportHeight - elementRect.bottom;
    const spaceAbove = elementRect.top;
        
    // Default positioning (to the right)
    let topPosition = elementRect.top + window.scrollY;
    let leftPosition = elementRect.right + window.scrollX + 10;
    
   
    
    // If not enough space below, position above
    if (spaceBelow < estimatedHeight && spaceAbove > estimatedHeight) {
      topPosition = elementRect.top + window.scrollY - estimatedHeight + 40;
    }
    
    // Ensure it's fully visible within the viewport
    topPosition = Math.max(10, Math.min(topPosition, viewportHeight - estimatedHeight - 10));
    leftPosition = Math.max(10, Math.min(leftPosition, viewportWidth - estimatedWidth - 10));
    
    // Apply calculated position
    container.style.top = `${topPosition}px`;
    container.style.left = `${leftPosition}px`;
  }

  private outsideClickHandler: (event: MouseEvent) => void;

  private setupOutsideClickHandler(container: HTMLDivElement) {
    // Remove any existing listener before adding a new one
    this.removeOutsideClickHandler();
  
    this.outsideClickHandler = (event: MouseEvent) => {
      if (!container.contains(event.target as Node)) {
        this.closeExistingColorPicker();
        this.removeOutsideClickHandler();
      }
    };
  
    document.addEventListener('pointerdown', this.outsideClickHandler);
  }
  
  private removeOutsideClickHandler() {
    if (this.outsideClickHandler) {
      document.removeEventListener('pointerdown', this.outsideClickHandler);
      this.outsideClickHandler = null;
    }
  }
  
  

  private closeExistingColorPicker() {
    this.selectedPad = null;
    if (this.currentColorPickerContainer && document.body.contains(this.currentColorPickerContainer)) {
      document.body.removeChild(this.currentColorPickerContainer);
      this.currentColorPickerContainer = null;
    }
    
    if (this.currentColorInput && document.body.contains(this.currentColorInput)) {
      document.body.removeChild(this.currentColorInput);
      this.currentColorInput = null;
    }
    if(this.previousElement){
      this.addLassoToolColorPicker(this.previousElement);
    }
  }
  
private updateAllElementColor(element, color){
  element.children.forEach(iliment => {
    iliment.color = color;
      this._modeling.updateProperties(iliment, {
        style: { fill: color }
      });
  });
}
  
  private updateElementColor(element: any, color: string) {
    let style: ElementStyle = null;
    const elementType = element.type;
    const def = element.def;
    element.color = color;
    if(elementType == 'bpmn:EndEvent')
    {
      COLORS[elementType] = {
        stroke: element.color,
        fill: element.color,
        fillOpacity: 0.35,
        strokeWidth: 4,
      };
    }
    else {
     COLORS[elementType] = {
      stroke: element.color,
      fill: element.color,
      fillOpacity: 0.35,
      strokeWidth: 2,
    };
  }
    if (element?.def === EventDef.Notify||element?.def === EventDef.System||element?.def === EventDef.Timer){
      COLORS[def] = {
        stroke: element.color,
        fill: element.color,
        fillOpacity: 0.35,
        strokeWidth: 2,
      };
    }

    this._modeling.updateProperties(element, {
      style: { fill: color, stroke: 'black',  strokeWidth: 2 }
    });
    // const elementStyle: ElementStyle = {
    //   fill: color,
    //   stroke:'#000000', // Darkened color for the border
    //   strokeWidth: 4,                 // Optional: make the border more visible
    //   // fillOpacity: 0.8,               // Optional: reduce fill opacity for contrast          // Optional: style the stroke
    // };
      
    // Apply the color to the BPMN element
    // this._modeling.updateProperties(element, {

    // });
    const textElement = this._elementRegistry.get(element.id);
  if (textElement) {
    this._modeling.updateProperties(textElement, {
      style: {fill: color}
    });
  }
    
  }

  // public getColorForElement(elementId: string): string {
  //   const element = this._elementRegistry.get(elementId);  // Get element by ID

  //   if (element && element.type && COLORS[element.type]) {
  //     return COLORS[element.type].fill; // Return the color from the COLORS object
  //   }
  //   return '#000000'; // Default to black if no color found
  // }

  private getContextPadEntries(element: DiagramEl) {
    const t = ElementType;
    const actions: any = {};

    const { type, businessObject } = element;

    if (type === t.Label) {
      return actions;
    }

    if (
      type === t.Stage
    ) {
      actions['lane-insert-above'] = {
        group: 'lane-insert-above',
        className: 'bpmn-icon-lane-insert-above',
        title: 'Add Lane above',
        action: {
          click: (_) => this._modeling.addLane(element, 'top'),
        },
      };

      actions['lane-insert-below'] = {
        group: 'lane-insert-below',
        className: 'bpmn-icon-lane-insert-below',
        title: 'Add Lane below',
        action: {
          click: (_) => this._modeling.addLane(element, 'bottom'),
        },
      };

      actions['color-picker'] = {
        group: 'edit',
        className: 'custom-paintbrush-icon', 
        title: 'Pick Color',
        action: {
          click: () => this.showColorPicker(element),
        },
      };
    }
    if ((type === t.Pool))
       {
      actions['lane-insert-above'] = {
        group: 'lane-insert-above',
        className: 'bpmn-icon-lane-insert-above',
        title: 'Add Lane above',
        action: {
          click: (_) => this._modeling.addLane(element, 'top'),
        },
      };

      actions['lane-insert-below'] = {
        group: 'lane-insert-below',
        className: 'bpmn-icon-lane-insert-below',
        title: 'Add Lane below',
        action: {
          click: (_) => this._modeling.addLane(element, 'bottom'),
        },
      };
    }
    if ((type === t.TriggerExtension))
      {
        actions['color-picker'] = {
          group: 'edit',
          className: 'custom-paintbrush-icon', 
          title: 'Pick Color',
          action: {
            click: () => this.showColorPicker(element),
          },
              

        };
   }

    let deleteAllowed = this._rules.allowed(Rule.DeleteElements, {
      elements: [element],
    });

    if (Array.isArray(deleteAllowed)) {
      deleteAllowed = deleteAllowed[0] === element;
    }

    if (deleteAllowed) {
      actions.delete = {
        group: 'edit',
        className: 'bpmn-icon-trash',
        title: 'Delete Element',
        action: {
          click: async (_) => {
            const modal = this.msg.showMessage('Warning', {
              header: 'Delete Element',
              body: 'Are you sure you want to delete the element?<br/>This action will also permantly remove  all connected triggers.',
              btnText: 'Delete',
              checkboxText: 'Yes, delete the element and all connected triggers.',
              isDelete: true,
              undoable: true,
              isNewDesign:true,
             // size:'sm'
            });
    
            const res = await modal.result;
            if (!res) {
              return null;
            }
    
            // Collect incoming and outgoing sequence flows
            const incomingConnections = this._elementRegistry.filter((el: any) =>
              el.type === 'bpmn:SequenceFlow' && el.target === element
            );
    
            const outgoingConnections = this._elementRegistry.filter((el: any) =>
              el.type === 'bpmn:SequenceFlow' && el.source === element
            );
    
            // Combine all connections
            const connections = [...incomingConnections, ...outgoingConnections];
    
            // Remove connections
            if (connections.length > 0) {
              this._modeling.removeElements(connections);
            }
    
            // Remove the element itself
            this._modeling.removeElements([element]);
          },
        },
      };
    }
    
    const connectAllowed = this._rules.allowed(Rule.CreateConnection, {
      source: element,
    });

    if (connectAllowed !== false && type != t.Pool) {
      if (
        isAny(businessObject, [
          'bpmn:FlowNode',
          'bpmn:InteractionNode',
          'bpmn:DataObjectReference',
          'bpmn:DataStoreReference'
        ]) || isCustom(businessObject)
      ) {
        actions.connect = {
          group: 'connect',
          className: 'bpmn-icon-connection-multi',
          title:
            'Connect using ' +
            (businessObject.isForCompensation
              ? ''
              : 'Sequence/MessageFlow or ') +
            'Association',
          action: {
            click: this._connect.start,
            dragstart: this._connect.start,
          },
        };
         
          
        actions['color-picker'] = {
          group: 'edit',
          className: 'custom-paintbrush-icon', 
          title: 'Pick Color',
          action: {
            click: () => this.showColorPicker(element),
          },
        };

        if (type === t.SubProcess) {
          actions['redirect-to-SubProcess'] = {
            group: 'navigation',
            className: 'custom-redirect-icon',
            title: element?.props && element.props.SubProcessName?.trim()
            ? `Go to ${element.props.SubProcessName}`
            : 'Go to Subprocess',
            action: {
              click: () => {
                const allElements = this._elementRegistry.getAll();
                const specificDetails = {
                  id: element?.id, // Ensure element is defined
                  name: element?.name,
                  type: element?.type,
                };
                if(window.location.href.includes('wfadmin'))
                  window.open(`/wfadmin/admin/wf/wfd?processName=${element?.props.SubProcessName}&VerNo=${element?.props.SubProcessWFVersionNo}`,'_blank');
                else
                  window.open(`/admin/wf/wfd?processName=${element?.props.SubProcessName}&VerNo=${element?.props.SubProcessWFVersionNo}`,'_blank');
              },
            },
          };
        }
        
    }

      if (type === t.Annotation) {
        actions.connect = {
          group: 'connect',
          className: 'bpmn-icon-connection-multi',
          title: 'Connect using Association',
          action: {
            click: this._connect.start,
            dragstart: this._connect.start,
          },
        };
      }
    }
  
    if ([t.Stage, t.StartState, t.EndState, t.State].includes(type)){
        // Add wrench icon for settings
    if (Object.keys(actions).length > 0 && element.props && (element.props.WfosId !== undefined || element.props.wfoid == undefined)) {
      const { WfosId, WfoId: stageId } = element.props as State;
      actions.settings = {
        group: 'edit',
        className: 'bpmn-icon-screw-wrench',
        title: 'WF Conditions',
        action: {
          click: (_) => {  
            const modal = this.msg.showComponent(WfconditionsComponent, {
               WFId:this.WFId,
               wfosId:WfosId,
               wfoid:stageId,
               isComingStageandState:true,      
            });
            console.log('Settings clicked for element:', modal);
          },
          
        },
      };

    }

    } 

    if([t.State].includes(type) && this._isAiFlow){
       actions.dottedConnection = {
        group: 'connect',
        className: 'bpmn-icon-default-flow',
        title: 'Dotted Line',
        action: {
            click: this.onDragDotted.bind(this),
            dragstart: this.onDragDotted.bind(this)
        },
      }
    }
  
  
    return actions;
  }
}

function isCustom(element) {
  return element && /^custom:/.test(element.type);
}


type PadActions = {
  [action: string]: PadAction;
};

type PadAction = {
  group: string;
  className: string;
  title: string;
  action: {
    [eventName: string]: Function;
  };
};
