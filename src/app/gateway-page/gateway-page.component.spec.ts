import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GatewayPageComponent } from './gateway-page.component';

describe('GatewayPageComponent', () => {
  let component: GatewayPageComponent;
  let fixture: ComponentFixture<GatewayPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GatewayPageComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
