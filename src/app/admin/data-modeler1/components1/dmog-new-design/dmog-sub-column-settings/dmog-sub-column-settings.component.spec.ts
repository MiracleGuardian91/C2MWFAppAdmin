import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmogSubColumnSettingsComponent } from './dmog-sub-column-settings.component';

describe('DmogSubColumnSettingsComponent', () => {
  let component: DmogSubColumnSettingsComponent;
  let fixture: ComponentFixture<DmogSubColumnSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DmogSubColumnSettingsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(DmogSubColumnSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
