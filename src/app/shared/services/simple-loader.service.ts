import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleLoaderService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  private loaderTypeSubject = new BehaviorSubject<'A' | 'B'>('B');
  
  public isLoading$ = this.isLoadingSubject.asObservable();
  public loaderType$ = this.loaderTypeSubject.asObservable();
  
  private requestCount = 0;
  private timeoutId: any = null; 

  constructor() { }

  show(url?: string, waitForResponse: boolean = false): void {
    this.requestCount++;

    if (this.requestCount === 1) {
      setTimeout(() => {
        if (url && (url.includes('SaveDmogProps') || url.includes('SaveBmoDmogLinking'))) {
          this.loaderTypeSubject.next('A'); 
        } else {
          this.loaderTypeSubject.next('B'); 
        }
        this.isLoadingSubject.next(true);

        if (!waitForResponse) {
          this.resetAutoHideTimer();
        }
      }, 0);
    }
  }

  hide(): void {
    this.requestCount--;
    if (this.requestCount <= 0) {
      this.requestCount = 0;
      setTimeout(() => {
        this.clearAutoHideTimer();
        this.isLoadingSubject.next(false);
      }, 0);
    }
  }

  forceHide(): void {
    this.requestCount = 0;
    this.clearAutoHideTimer();
    setTimeout(() => {
      this.isLoadingSubject.next(false);
    }, 0);
  }

  private resetAutoHideTimer(): void {
    this.clearAutoHideTimer();
    this.timeoutId = setTimeout(() => {
      if (this.requestCount > 0) {
        this.forceHide();
      }
    }, 3_000); 
  }

  private clearAutoHideTimer(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  get isLoading(): boolean {
    return this.isLoadingSubject.value;
  }

  get currentLoaderType(): 'A' | 'B' {
    return this.loaderTypeSubject.value;
  }
}
