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

    const currentFontColor = this.getCurrentFontColor(element);
    const currentFillColor = this.getCurrentFillColor(element);
    const currentFontBold = this.getCurrentFontBold(element);
    const currentFontItalic = this.getCurrentFontItalic(element);
    const currentFontUnderline = this.getCurrentFontUnderline(element);

    return {
      fontFamily: bo?.fontFamily || element.fontFamily || 'Museo Sans',
      fontSize: bo?.fontSize || element.fontSize || '13px',
      fontColor:
        currentFontColor || bo?.fontColor || element.fontColor || '#000000',
      fontBold:
        currentFontBold !== null
          ? currentFontBold
          : bo?.fontBold || element.fontBold || false,
      fontItalic:
        currentFontItalic !== null
          ? currentFontItalic
          : bo?.fontItalic || element.fontItalic || false,
      fontUnderline:
        currentFontUnderline !== null
          ? currentFontUnderline
          : bo?.fontUnderline || element.fontUnderline || false,
      color: currentFillColor || bo?.color || element.color || '#ffffff',
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

    const labelShape = element && (element as any).label;
    if (labelShape) {
      this.updateTextElements(labelShape, properties);
      this.eventBus.fire('element.changed', { element: labelShape });
    }
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
        rectEl.setAttribute('stroke', properties.color);
      });

      const pathElements = gfx.querySelectorAll('path');
      pathElements.forEach((pathEl: SVGPathElement) => {
        pathEl.setAttribute('stroke', properties.color);
        try {
          (pathEl as any).style?.setProperty(
            'stroke',
            properties.color,
            'important'
          );
        } catch {}
        if (
          pathEl.getAttribute('fill') &&
          pathEl.getAttribute('fill') !== 'none'
        ) {
          pathEl.setAttribute('fill', properties.color);
        }
      });

      // Also handle polylines if present
      const polylineElements = gfx.querySelectorAll('polyline');
      polylineElements.forEach((polyEl: SVGPolylineElement) => {
        polyEl.setAttribute('stroke', properties.color);
        try {
          (polyEl as any).style?.setProperty(
            'stroke',
            properties.color,
            'important'
          );
        } catch {}
      });
    }
  }

  private getCurrentFontColor(element: any): string | null {
    try {
      const gfx = this.elementRegistry.getGraphics(element.id);
      if (gfx) {
        const textElement = gfx.querySelector('text');
        if (textElement) {
          const fontColor =
            textElement.getAttribute('fill') ||
            (textElement as any).style?.fill ||
            window.getComputedStyle(textElement as any).fill;
          if (
            fontColor &&
            fontColor !== 'inherit' &&
            fontColor !== 'currentColor'
          ) {
            return fontColor;
          }
        }
      }

      const label = element && (element as any).label;
      if (label) {
        const lgfx = this.elementRegistry.getGraphics(label.id);
        if (lgfx) {
          const ltext = lgfx.querySelector('text');
          if (ltext) {
            const lColor =
              ltext.getAttribute('fill') ||
              (ltext as any).style?.fill ||
              window.getComputedStyle(ltext as any).fill;
            if (lColor) return lColor;
          }
        }
      }
    } catch (error) {
      console.warn('Error getting font color:', error);
    }
    return null;
  }

  private getCurrentFillColor(element: any): string | null {
    try {
      const gfx = this.elementRegistry.getGraphics(element.id);
      if (gfx) {
        // Check rect elements for fill color
        const rectElements = gfx.querySelectorAll('rect');
        for (let i = 0; i < rectElements.length; i++) {
          const rectEl = rectElements[i];
          const fill = rectEl.getAttribute('fill');
          if (fill && fill !== 'none' && fill !== 'transparent') {
            return fill;
          }
        }

        // Check path elements for fill color
        const pathElements = gfx.querySelectorAll('path');
        for (let i = 0; i < pathElements.length; i++) {
          const pathEl = pathElements[i];
          const fill = pathEl.getAttribute('fill');
          if (fill && fill !== 'none' && fill !== 'transparent') {
            return fill;
          }
        }
      }
    } catch (error) {
      console.warn('Error getting fill color:', error);
    }
    return null;
  }

  private getCurrentFontBold(element: any): boolean | null {
    try {
      const gfx = this.elementRegistry.getGraphics(element.id);
      if (gfx) {
        const textElement = gfx.querySelector('text');
        if (textElement) {
          const fontWeight =
            textElement.getAttribute('font-weight') ||
            textElement.style.fontWeight ||
            window.getComputedStyle(textElement).fontWeight;
          return (
            fontWeight === 'bold' ||
            fontWeight === '700' ||
            fontWeight === '800' ||
            fontWeight === '900'
          );
        }
      }
    } catch (error) {
      console.warn('Error getting font bold:', error);
    }
    return null;
  }

  private getCurrentFontItalic(element: any): boolean | null {
    try {
      const gfx = this.elementRegistry.getGraphics(element.id);
      if (gfx) {
        const textElement = gfx.querySelector('text');
        if (textElement) {
          const fontStyle =
            textElement.getAttribute('font-style') ||
            textElement.style.fontStyle ||
            window.getComputedStyle(textElement).fontStyle;
          return fontStyle === 'italic';
        }
      }
    } catch (error) {
      console.warn('Error getting font italic:', error);
    }
    return null;
  }

  private getCurrentFontUnderline(element: any): boolean | null {
    try {
      const gfx = this.elementRegistry.getGraphics(element.id);
      if (gfx) {
        const textElement = gfx.querySelector('text');
        if (textElement) {
          const textDecoration =
            textElement.getAttribute('text-decoration') ||
            textElement.style.textDecoration ||
            window.getComputedStyle(textElement).textDecoration;
          return textDecoration.includes('underline');
        }
      }
    } catch (error) {
      console.warn('Error getting font underline:', error);
    }
    return null;
  }

  static $inject = ['eventBus', 'modeling', 'elementRegistry'];
}
