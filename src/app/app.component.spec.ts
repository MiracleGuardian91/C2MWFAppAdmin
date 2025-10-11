import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

// Stubbing unneeded components
@Component({
    selector: 'app-header', template: '',
    standalone: true,
    imports: [RouterTestingModule]
})
class HeaderComponent {}

@Component({
    selector: 'router-outlet', template: '',
    standalone: true,
    imports: [RouterTestingModule]
})
class RouterOutletStubComponent { }

@Component({
    selector: 'app-footer', template: '',
    standalone: true,
    imports: [RouterTestingModule]
})
class FooterComponent {}

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [
        RouterTestingModule,
        HeaderComponent,
        RouterOutletStubComponent,
        FooterComponent,
        AppComponent
    ],
}).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'listingcms'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('listingcms');
  });
});
