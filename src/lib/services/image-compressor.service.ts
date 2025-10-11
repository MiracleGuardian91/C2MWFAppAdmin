import { Injectable, Renderer2 } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageCompressorService {

  constructor() { }
  compress(payload: CompressorPayload): Observable<any> {
    payload.quality = payload.quality || 1.0;
    const width = payload.width;
    const height = payload.height;


    return new Observable(observer => {
      const image = new Image();
      image.src = payload.base64;
     
      image.onload = () => {
          const canvas = document.createElement('canvas'); // Use Angular's Renderer2 method
          canvas.width = width;
          canvas.height = height;
          const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, width, height);
          ctx.globalCompositeOperation = 'source-over';
          ctx.drawImage(image, 0, 0, width, height);
          ctx.canvas.toBlob(
            blob => {
              observer.next(
                new File([blob], payload.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now(),
                }),
              );
              observer.complete();
            },
            'image/jpeg',
            payload.quality,
          );
        };
    });
  }
}

export interface CompressorPayload {
  base64: string;
  name: string;
  width: number;
  height: number;
  quality?: number;
}