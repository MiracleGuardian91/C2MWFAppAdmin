import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowSaveUpdateComponent } from './workflow-save-update.component';

describe('WorkflowSaveUpdateComponent', () => {
  let component: WorkflowSaveUpdateComponent;
  let fixture: ComponentFixture<WorkflowSaveUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WorkflowSaveUpdateComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowSaveUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
