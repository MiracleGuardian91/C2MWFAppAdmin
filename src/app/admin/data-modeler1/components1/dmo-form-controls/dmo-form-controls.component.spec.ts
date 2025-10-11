import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmoFormControlsComponent } from './dmo-form-controls.component';

describe('DmoFormControlsComponent', () => {
  let component: DmoFormControlsComponent;
  let fixture: ComponentFixture<DmoFormControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DmoFormControlsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(DmoFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
