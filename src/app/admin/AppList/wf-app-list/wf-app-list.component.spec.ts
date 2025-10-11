import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfAppListComponent } from './wf-app-list.component';

describe('WfAppListComponent', () => {
  let component: WfAppListComponent;
  let fixture: ComponentFixture<WfAppListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WfAppListComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
