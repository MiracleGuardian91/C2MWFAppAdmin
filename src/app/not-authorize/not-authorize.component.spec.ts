import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotAuthorizeComponent } from './not-authorize.component';

describe('NotAuthorizeComponent', () => {
  let component: NotAuthorizeComponent;
  let fixture: ComponentFixture<NotAuthorizeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [NotAuthorizeComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
