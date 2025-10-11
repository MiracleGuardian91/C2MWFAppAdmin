import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderBComponent } from '../components/loader/loader.component';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  private readonly globalLoaderSubject = new BehaviorSubject<Type<any>>(LoaderBComponent);
  private readonly localLoaderSubject = new BehaviorSubject<Type<any>>(null);

  globalLoader$ = this.globalLoaderSubject.asObservable();
  localLoader$ = this.localLoaderSubject.asObservable();

  setGlobalLoader(component: Type<any>) {
    this.globalLoaderSubject.next(component);
  }

  setLocalLoader(component: Type<any> | null) {
    this.localLoaderSubject.next(component);
  }

  get currentGlobalLoader(): Type<any> {
    return this.globalLoaderSubject.getValue();
  }

  get currentLocalLoader(): Type<any> | null {
    return this.localLoaderSubject.getValue();
  }
}
