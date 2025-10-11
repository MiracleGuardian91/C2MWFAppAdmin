import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerConditionDetailComponent } from './trigger-condition-detail.component';

describe('TriggerConditionDetailComponent', () => {
  let component: TriggerConditionDetailComponent;
  let fixture: ComponentFixture<TriggerConditionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TriggerConditionDetailComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerConditionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
