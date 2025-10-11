import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfconditionsComponent } from './wfconditions.component';

describe('WfconditionsComponent', () => {
  let component: WfconditionsComponent;
  let fixture: ComponentFixture<WfconditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WfconditionsComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
