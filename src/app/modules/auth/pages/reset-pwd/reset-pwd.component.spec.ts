import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResetPwdComponent } from './reset-pwd.component';

describe('ForgotPwdComponent', () => {
  let component: ResetPwdComponent;
  let fixture: ComponentFixture<ResetPwdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [ResetPwdComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
