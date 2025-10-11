import { Component, Renderer2, Type, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoaderService } from './shared/services/loader.service';
import { SimpleLoaderService } from './shared/services/simple-loader.service';
import { Router, NavigationEnd, Event, RouterOutlet } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { CommonModule } from '@angular/common';
import { CssLoaderService } from './shared/services/css-loader.service';
import { SimpleLoaderComponent } from './shared/components/simple-loader/simple-loader.component';
import { SimpleLoaderBComponent } from './shared/components/simple-loader-b/simple-loader-b.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls:['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, NgHttpLoaderModule, CommonModule, SimpleLoaderComponent, SimpleLoaderBComponent]
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'listingcms';
  globalLoaderComponent: Type<any>;
  localLoaderComponent: Type<any> | null = null;
  private routerSubscription: Subscription;
  
  // Observables for our conditional API loaders
  isApiLoading$: Observable<boolean>;
  loaderType$: Observable<'A' | 'B'>;
  
  constructor(
    private titleService: Title, 
    private renderer: Renderer2, 
    private loaderService: LoaderService,
    private simpleLoaderService: SimpleLoaderService,
    private router: Router,
    private cssLoaderService: CssLoaderService
  ) {
    this.routerSubscription = this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Normalize URL by removing query params and hash
      const url = event.url.split('?')[0].split('#')[0];
      
      // Check for data modeler route and its sub-routes
      const dataModelerBasePath = 'admin/bm/data-modeler1';
      const isDataModelerRoute = url === `/${dataModelerBasePath}` || 
                               url.startsWith(`/${dataModelerBasePath}/`) ||
                               url === dataModelerBasePath ||
                               url.startsWith(`${dataModelerBasePath}/`);
      
      if (isDataModelerRoute) {
        this.renderer.addClass(document.body, 'no-scroll');
      } else {
        this.renderer.removeClass(document.body, 'no-scroll');
      }
    });
  }
  private globalLoaderSubscription: Subscription;
  private localLoaderSubscription: Subscription;


  ngOnInit() {
    if (sessionStorage.getItem('DisplayName')) {
      const processtitle = sessionStorage.getItem('DisplayName');
      this.setDocTitle(processtitle);
    }
    
    // Initialize our conditional API loader observables
    this.isApiLoading$ = this.simpleLoaderService.isLoading$;
    this.loaderType$ = this.simpleLoaderService.loaderType$;
    
    // Subscribe to loader updates
    this.globalLoaderSubscription = this.loaderService.globalLoader$.subscribe(component => {
      this.globalLoaderComponent = component;
    });
    
    this.localLoaderSubscription = this.loaderService.localLoader$.subscribe(component => {
      this.localLoaderComponent = component;
    });
  }

  ngOnDestroy() {
    // Clean up all subscriptions
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.globalLoaderSubscription) {
      this.globalLoaderSubscription.unsubscribe();
    }
    if (this.localLoaderSubscription) {
      this.localLoaderSubscription.unsubscribe();
    }
    // Clean up any added classes
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }

  get showHeaderFooter(){
    const pathsToHide = ['/admin/bm', '/admin/wf'];
    const currentUrl = window.location.pathname;
    return !pathsToHide.some(path =>
    currentUrl.includes(path)
    );
  }

}
