import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowSaveUpdateComponent } from './flow-save-update.component';

describe('FlowSaveUpdateComponent', () => {
  let component: FlowSaveUpdateComponent;
  let fixture: ComponentFixture<FlowSaveUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowSaveUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowSaveUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
