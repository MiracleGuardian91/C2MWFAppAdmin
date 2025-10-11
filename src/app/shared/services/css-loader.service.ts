// css-loader.service.ts
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { environment } from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class CssLoaderService {
   private renderer: Renderer2;
  private addedLinks = new Map<string, HTMLLinkElement>();

  constructor(rendererFactory: RendererFactory2) {
    this.observeHtmlClassChanges();
    this.renderer = rendererFactory.createRenderer(null, null);
  }
 private observeHtmlClassChanges(): void {
    this.loadCss();

    const observer = new MutationObserver(() => {
      this.loadCss();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
  loadCss(): Promise<void> {
     return new Promise((resolve, reject) => {
    //   if (this.addedLinks.has(href)) {
    //     resolve();
    //     return;
    //   }
    
      const link: HTMLLinkElement = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${environment.Setting.AppsAdminDomainUrl}/assets/style.css`;

      // Normal onload/onerror
      link.onload = () => resolve();
      link.onerror = () => reject(`Failed to load CSS: ${link.href}`);

      // 👇 Extra check with MutationObserver
      const observer = new MutationObserver(() => {
        const sheets = Array.from(document.styleSheets)
          .filter(s => s.href === link.href);
        if (sheets.length > 0) {
          resolve();
          observer.disconnect();
        }
      });

      observer.observe(document.head, { childList: true, subtree: true });

      document.head.appendChild(link);
    });
  }
  removeCss(href: string): void {
    const link = this.addedLinks.get(href);
    if (link) {
      this.renderer.removeChild(document.head, link);
      this.addedLinks.delete(href);
    }
  }
}
