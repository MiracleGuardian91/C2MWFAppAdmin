import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewMasterConfigurationComponent } from './grid-view-master-configuration.component';

describe('GridViewMasterConfigurationComponent', () => {
  let component: GridViewMasterConfigurationComponent;
  let fixture: ComponentFixture<GridViewMasterConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GridViewMasterConfigurationComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(GridViewMasterConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
