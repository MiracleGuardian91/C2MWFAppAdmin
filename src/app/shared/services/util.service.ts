import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UtilService {
	static getUrlForImage(imageName: string): string {
		if (!imageName) {
			return '';
		}

		if (/^(https?:)?\/\//i.test(imageName) || /^(data|blob):/i.test(imageName)) {
			return imageName;
		}

		const configuredBase: string = (environment as any).AppsAdminDomainUrl || (environment as any).Setting?.AppsAdminDomainUrl || '';
		const normalizedImageName = imageName.replace(/^\/+/, '');

		try {
			const origin = typeof window !== 'undefined' && window.location ? window.location.origin : undefined;
			const baseUrl = new URL(configuredBase || '/', origin);

			// if (typeof window !== 'undefined' && window.location && window.location.port === '4200') {
			// 	if (baseUrl.hostname === window.location.hostname && (baseUrl.protocol === 'http:' || baseUrl.protocol === 'https:')) {
			// 		baseUrl.port = '4300';
			// 	}
			// }

			if (!baseUrl.pathname.endsWith('/')) {
				baseUrl.pathname = baseUrl.pathname + '/';
			}

			return baseUrl.toString() + normalizedImageName;
		} catch {
			const withSlash = configuredBase.endsWith('/') ? configuredBase : configuredBase + '/';
			return withSlash + normalizedImageName;
		}
	}

	static processImageUrlsForDynamicHtmls(html: any): string {
    if (!html) return html;
    let processedHtml = html.toString();

    const imagePatterns = [
      // Pattern for /assets/admin-assets/images/ files
      { 
        pattern: /src="\/assets\/admin-assets\/images\/([^"]+)"/g, 
        replacement: (match, filename) => {
          const fullUrl = UtilService.getUrlForImage(`/assets/admin-assets/images/${filename}`);
          return `src="${fullUrl}"`;
        }
      },
      // Pattern for /assets/images/ files
      { 
        pattern: /src="\/assets\/images\/([^"]+)"/g, 
        replacement: (match, filename) => {
          const fullUrl = UtilService.getUrlForImage(`/assets/images/${filename}`);
          return `src="${fullUrl}"`;
        }
      },
      // Pattern for /assets/styles/images/ files
      { 
        pattern: /src="\/assets\/styles\/images\/([^"]+)"/g, 
        replacement: (match, filename) => {
          const fullUrl = UtilService.getUrlForImage(`/assets/styles/images/${filename}`);
          return `src="${fullUrl}"`;
        }
      }
    ];

    // Apply all image pattern replacements
    imagePatterns.forEach(({pattern, replacement}) => {
      processedHtml = processedHtml.replace(pattern, replacement);
    });
    
    // Additional handling for federation environment
      // In federation, ensure all relative paths are converted to absolute URLs
      // This helps when the microfrontend is loaded from a different host
      processedHtml = processedHtml.replace(/src="\/assets\//g, `src="${window.location.origin}/assets/`);
    
    return processedHtml;
}
}


