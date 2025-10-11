import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfRoleGridComponent } from './wf-role-grid.component';

describe('WfRoleGridComponent', () => {
  let component: WfRoleGridComponent;
  let fixture: ComponentFixture<WfRoleGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WfRoleGridComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfRoleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
