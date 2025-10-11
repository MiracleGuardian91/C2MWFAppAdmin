import { Component, ElementRef, forwardRef, ViewChild, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EditorComponent),
            multi: true
        }
    ],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule]
})
export class EditorComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild('editor', { static: false }) editor!: ElementRef<HTMLDivElement>;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  value = '';
  showSource = false;
  history: string[] = [];
historyIndex = -1;

ngAfterViewInit() {
  if (!this.editor) {
    console.error('Editor is not initialized!');
    return;
  }
  
  // Setup link hover behavior
  this.setupLinkHoverHandlers();
}

  writeValue(value: string): void {
    this.value = value || '';
    setTimeout(() => {
      if (this.editor) {
        this.editor.nativeElement.innerHTML = this.value;
      }
    });
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /*updateContent(): void {
    if (this.editor) {
      this.value = this.editor.nativeElement.innerHTML;
      this.onChange(this.value);
    }
  }*/
    alignText(align: string) {
      const selection = window.getSelection();
      if (!selection?.rangeCount) return;
  
      const range = selection.getRangeAt(0);
      let currentNode: Node | null = range.startContainer;
  
      // Find the closest block-level element
      while (currentNode?.parentElement) {
          if (currentNode.parentElement instanceof HTMLDivElement || currentNode.parentElement instanceof HTMLParagraphElement) {
              currentNode = currentNode.parentElement;
              break;
          }
          currentNode = currentNode.parentElement;
      }
  
      if (currentNode instanceof HTMLElement) {
          currentNode.style.textAlign = align;
          this.updateContent();
      }
  }
  
  

  formatText(style: 'bold' | 'italic' | 'underline') {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
  
    const range = selection.getRangeAt(0);
    if (range.collapsed) return; // No text selected
  
    const parentElement = this.getParentTag(range.commonAncestorContainer, style);
  
    if (parentElement) {
      // Remove formatting but keep inline styles
      const span = document.createElement('span');
      span.innerHTML = parentElement.innerHTML;
      span.style.cssText = parentElement.style.cssText; // Preserve styles
      parentElement.replaceWith(span);
    } else {
      // Apply formatting without removing existing styles
      let tagName;

      if (style === 'bold') {
        tagName = 'b';
      } else if (style === 'italic') {
        tagName = 'i';
      } else {
        tagName = 'u';
      }

      const element = document.createElement(tagName);

  
      // Extract content while preserving existing styles
      const span = document.createElement('span');
      span.appendChild(range.extractContents());
      span.style.cssText = range.commonAncestorContainer.parentElement?.style.cssText || '';

  
      element.appendChild(span);
      range.insertNode(element);
    }
  
    this.updateContent();
  }
  
  
  /**
   * Helper function to check if the selected text is already inside a specific tag (b, i, u).
   */
  getParentTag(node: Node, tag: string): HTMLElement | null {
    let expectedTag: string;

    if (tag === 'bold') {
      expectedTag = 'b';
    } else if (tag === 'italic') {
      expectedTag = 'i';
    } else {
      expectedTag = 'u';
    }

    while (node && node !== this.editor?.nativeElement) {
      if (
        node instanceof HTMLElement &&
        node.tagName.toLowerCase() === expectedTag
      ) {
        return node;
      }
      node = node.parentNode as Node;
    }

    return null;
  }
  
  /**
   * Checks if the current selection has the specified format
   * Used to highlight formatting buttons when formatted text is selected
   */
  isFormatActive(format: 'bold' | 'italic' | 'underline'): boolean {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
      return false;
    }
    
    const range = selection.getRangeAt(0);
    let node = range.commonAncestorContainer;
    
    // Check if the selection is within a formatted element
    return this.getParentTag(node, format) !== null;
  }

  changeTextColor(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    this.applyStyle('color', color);
  }

  changeBgColor(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    this.applyStyle('backgroundColor', color);
  }

  applyStyle(property: string, value: string) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    if (range.collapsed) return; // No text selected

    const span = document.createElement("span");
    span.style[property as any] = value;
    span.innerHTML = range.toString();

    range.deleteContents();
    range.insertNode(span);
    this.updateContent();
  }


  updateContent(): void {
    if (this.editor) {
      this.value = this.editor.nativeElement.innerHTML;
      
      this.onChange(this.value);
      this.saveToHistory();
    }
  }
  
  saveToHistory(): void {
    if (this.historyIndex < this.history.length - 1) {
      this.history.splice(this.historyIndex + 1);
    }
    this.history.push(this.value);
    this.historyIndex = this.history.length - 1;
  }
  
  undo(): void {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      this.value = this.history[this.historyIndex];
      this.editor.nativeElement.innerHTML = this.value;
    }
  }
  
  redo(): void {
    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex++;
      this.value = this.history[this.historyIndex];
      this.editor.nativeElement.innerHTML = this.value;
    }
  }

  insertList(type: 'ul' | 'ol') {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
  
    const range = selection.getRangeAt(0);
    const list = document.createElement(type);
    const listItem = document.createElement('li');
  
    listItem.textContent = selection.toString();
    list.appendChild(listItem);
  
    range.deleteContents();
    range.insertNode(list);
  
    this.updateContent();
  }
  
  applyBlockFormat(tag: string): void {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
  
    const range = selection.getRangeAt(0);
    const selectedContent = range.extractContents();
  
    // Create a new block element (paragraph or heading)
    const blockElement = document.createElement(tag);
    blockElement.appendChild(selectedContent);
  
    range.insertNode(blockElement);
  
    // Move cursor inside the newly created block
    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(blockElement);
    newRange.collapse(false);
    selection.addRange(newRange);
  }
  


  execCommand(command: string, value?: string) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");

    switch (command) {
        case "bold":
            span.style.fontWeight = "bold";
            break;
        case "italic":
            span.style.fontStyle = "italic";
            break;
        case "underline":
            span.style.textDecoration = "underline";
            break;
        default:
            console.warn(`Unsupported command: ${command}`);
            return;
    }

    span.textContent = range.toString();
    range.deleteContents();
    range.insertNode(span);

    this.updateContent();
}


insertLink() {
  const url = prompt('Enter URL:');
  if (!url) return;

  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const link = document.createElement('a');
  link.href = url;
  link.textContent = selection.toString() || url;
  link.target = '_blank'; 
  link.style.wordBreak = 'break-word'; // Prevents long URLs from breaking the layout

  range.deleteContents();
  range.insertNode(link);

  this.updateContent();
}



  insertTable() {
    const rows = Number(prompt('Enter number of rows:', '2'));
    const cols = Number(prompt('Enter number of columns:', '2'));

    if (rows > 0 && cols > 0) {
      let table = '<table border="1" style="border-collapse: collapse; width: 100%;">';
      for (let i = 0; i < rows; i++) {
        table += '<tr>';
        for (let j = 0; j < cols; j++) {
          table += '<td contenteditable="true">&nbsp;</td>';
        }
        table += '</tr>';
      }
      table += '</table>';
      this.editor.nativeElement.insertAdjacentHTML('beforeend', table);
      this.updateContent();
    }
  }
 

  

  toggleSource() {
    this.showSource = !this.showSource;

    if (this.showSource) {
      // Save the current HTML content to value
      this.value = this.editor.nativeElement.innerHTML;
    } else {
      // Restore HTML content from value
      this.editor.nativeElement.innerHTML = this.value;
      
      // Re-setup link hover handlers when switching from source mode
      this.setupLinkHoverHandlers();
    }
  }
  
  /**
   * Setup event listeners for link hover behavior
   */
  private setupLinkHoverHandlers(): void {
    // Use a mutation observer to detect new links added to the editor
    const observer = new MutationObserver(() => {
      this.attachLinkHoverHandlers();
    });
    
    observer.observe(this.editor.nativeElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
    
    // Initial setup for existing links
    this.attachLinkHoverHandlers();
  }
  
  /**
   * Attach hover handlers to all links in the editor
   */
  private attachLinkHoverHandlers(): void {
    const links = this.editor.nativeElement.querySelectorAll('a');
    
    links.forEach((link: HTMLAnchorElement) => {
      // Skip links that already have event listeners
      if (link.hasAttribute('data-hover-attached')) {
        return;
      }
      
      link.setAttribute('data-hover-attached', 'true');
      
      link.addEventListener('mouseenter', () => {
        // Create launch button if it doesn't exist
        if (!link.querySelector('.link-launch-icon')) {
          const launchIcon = document.createElement('span');
          launchIcon.className = 'link-launch-icon';
          launchIcon.innerHTML = '🔗';
          launchIcon.title = 'Open link in new tab';
          launchIcon.style.cursor = 'pointer';
          
          // Position the launch icon
          launchIcon.style.marginLeft = '4px';
          
          // Attach click event to launch icon
          launchIcon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(link.href, '_blank');
          });
          
          link.appendChild(launchIcon);
        }
      });
      
      link.addEventListener('mouseleave', (e) => {
        // Check if we're not hovering over the launch icon
        const relatedTarget = e.relatedTarget as HTMLElement;
        if (!relatedTarget || !link.contains(relatedTarget)) {
          // Remove launch icon
          const icon = link.querySelector('.link-launch-icon');
          if (icon) {
            link.removeChild(icon);
          }
        }
      });
    });
  }
  
}
