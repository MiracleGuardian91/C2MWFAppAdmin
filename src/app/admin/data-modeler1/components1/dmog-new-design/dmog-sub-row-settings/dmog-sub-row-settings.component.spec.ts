import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmogSubRowSettingsComponent } from './dmog-sub-row-settings.component';

describe('DmogSubRowSettingsComponent', () => {
  let component: DmogSubRowSettingsComponent;
  let fixture: ComponentFixture<DmogSubRowSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DmogSubRowSettingsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(DmogSubRowSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
