import CommandInterceptor from 'diagram-js/lib/command/CommandInterceptor';

export class ElementPropertiesCommand extends CommandInterceptor {
  private modeling: any;
  private elementRegistry: any;
  private eventBus: any;

  constructor(eventBus, modeling, elementRegistry) {
    super(eventBus);

    this.eventBus = eventBus;
    this.modeling = modeling;
    this.elementRegistry = elementRegistry;

    this.preExecute('element.updateProperties', (event) => {
      const context = event.context;
      const element = context.element;
      const properties = context.properties;

      if (this.isElementPropertyChange(properties)) {
        if (!context.oldElementProperties) {
          context.oldElementProperties =
            this.getCurrentElementProperties(element);
        }
      }
    });

    this.executed('element.updateProperties', (event) => {
      const context = event.context;
      const element = context.element;
      const properties = context.properties;

      if (this.isElementPropertyChange(properties)) {
        this.applyElementPropertiesToElement(element, properties);
        this.eventBus.fire('element.changed', { element });
      }
    });

    this.reverted('element.updateProperties', (event) => {
      const context = event.context;
      const element = context.element;
      const oldElementProperties = context.oldElementProperties;

      if (
        oldElementProperties &&
        this.isElementPropertyChange(context.properties)
      ) {
        this.applyElementPropertiesToElement(element, oldElementProperties);
        this.eventBus.fire('element.changed', { element });
      }
    });
  }

  private isElementPropertyChange(properties: any): boolean {
    return (
      properties.fontFamily !== undefined ||
      properties.fontSize !== undefined ||
      properties.fontColor !== undefined ||
      properties.fontBold !== undefined ||
      properties.fontItalic !== undefined ||
      properties.fontUnderline !== undefined ||
      properties.color !== undefined
    );
  }

  private getCurrentElementProperties(element: any): any {
    const bo = element.businessObject;
    return {
      fontFamily: bo?.fontFamily || element.fontFamily || 'Arial',
      fontSize: bo?.fontSize || element.fontSize || '14px',
      fontColor: bo?.fontColor || element.fontColor || '#000000',
      fontBold: bo?.fontBold || element.fontBold || false,
      fontItalic: bo?.fontItalic || element.fontItalic || false,
      fontUnderline: bo?.fontUnderline || element.fontUnderline || false,
      color: bo?.color || element.color || '#ffffff',
    };
  }

  private applyElementPropertiesToElement(element: any, properties: any): void {
    const bo = element.businessObject;
    if (bo) {
      if (properties.fontFamily !== undefined)
        bo.fontFamily = properties.fontFamily;
      if (properties.fontSize !== undefined) bo.fontSize = properties.fontSize;
      if (properties.fontColor !== undefined)
        bo.fontColor = properties.fontColor;
      if (properties.fontBold !== undefined) bo.fontBold = properties.fontBold;
      if (properties.fontItalic !== undefined)
        bo.fontItalic = properties.fontItalic;
      if (properties.fontUnderline !== undefined)
        bo.fontUnderline = properties.fontUnderline;
      if (properties.color !== undefined) bo.color = properties.color;
    }

    if (properties.fontFamily !== undefined)
      element.fontFamily = properties.fontFamily;
    if (properties.fontSize !== undefined)
      element.fontSize = properties.fontSize;
    if (properties.fontColor !== undefined)
      element.fontColor = properties.fontColor;
    if (properties.fontBold !== undefined)
      element.fontBold = properties.fontBold;
    if (properties.fontItalic !== undefined)
      element.fontItalic = properties.fontItalic;
    if (properties.fontUnderline !== undefined)
      element.fontUnderline = properties.fontUnderline;
    if (properties.color !== undefined) element.color = properties.color;

    this.updateTextElements(element, properties);
  }

  private updateTextElements(element: any, properties: any): void {
    const gfx = this.elementRegistry.getGraphics(element.id);
    if (!gfx) return;

    // Update text elements
    const textElements = gfx.querySelectorAll('text');
    textElements.forEach((textEl: SVGTextElement) => {
      if (properties.fontFamily !== undefined) {
        textEl.setAttribute('font-family', properties.fontFamily);
      }
      if (properties.fontSize !== undefined) {
        textEl.setAttribute('font-size', properties.fontSize);
      }
      if (properties.fontColor !== undefined) {
        textEl.setAttribute('fill', properties.fontColor);
      }
      if (properties.fontBold !== undefined) {
        textEl.setAttribute(
          'font-weight',
          properties.fontBold ? 'bold' : 'normal'
        );
      }
      if (properties.fontItalic !== undefined) {
        textEl.setAttribute(
          'font-style',
          properties.fontItalic ? 'italic' : 'normal'
        );
      }
      if (properties.fontUnderline !== undefined) {
        textEl.setAttribute(
          'text-decoration',
          properties.fontUnderline ? 'underline' : 'none'
        );
      }
    });

    // Update tspan elements
    const tspanElements = gfx.querySelectorAll('tspan');
    tspanElements.forEach((tspanEl: SVGTSpanElement) => {
      if (properties.fontFamily !== undefined) {
        tspanEl.setAttribute('font-family', properties.fontFamily);
      }
      if (properties.fontSize !== undefined) {
        tspanEl.setAttribute('font-size', properties.fontSize);
      }
      if (properties.fontColor !== undefined) {
        tspanEl.setAttribute('fill', properties.fontColor);
      }
      if (properties.fontBold !== undefined) {
        tspanEl.setAttribute(
          'font-weight',
          properties.fontBold ? 'bold' : 'normal'
        );
      }
      if (properties.fontItalic !== undefined) {
        tspanEl.setAttribute(
          'font-style',
          properties.fontItalic ? 'italic' : 'normal'
        );
      }
      if (properties.fontUnderline !== undefined) {
        tspanEl.setAttribute(
          'text-decoration',
          properties.fontUnderline ? 'underline' : 'none'
        );
      }
    });

    if (properties.color !== undefined) {
      const rectElements = gfx.querySelectorAll('rect');
      rectElements.forEach((rectEl: SVGRectElement) => {
        rectEl.setAttribute('fill', properties.color);
      });

      const pathElements = gfx.querySelectorAll('path');
      pathElements.forEach((pathEl: SVGPathElement) => {
        pathEl.setAttribute('fill', properties.color);
      });
    }
  }

  static $inject = ['eventBus', 'modeling', 'elementRegistry'];
}
