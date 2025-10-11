import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContierParentRowSettingsComponent } from './contier-parent-row-settings.component';

describe('ContierParentRowSettingsComponent', () => {
  let component: ContierParentRowSettingsComponent;
  let fixture: ComponentFixture<ContierParentRowSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ContierParentRowSettingsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ContierParentRowSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
