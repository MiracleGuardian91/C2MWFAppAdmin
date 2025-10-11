import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfConditionDetailComponent } from './wf-condition-detail.component';

describe('WfConditionDetailComponent', () => {
  let component: WfConditionDetailComponent;
  let fixture: ComponentFixture<WfConditionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WfConditionDetailComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfConditionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
