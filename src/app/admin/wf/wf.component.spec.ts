import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfComponent } from './wf.component';

describe('WfComponent', () => {
  let component: WfComponent;
  let fixture: ComponentFixture<WfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WfComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
