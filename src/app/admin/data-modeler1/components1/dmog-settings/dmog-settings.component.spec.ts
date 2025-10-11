import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmogSettingsComponent } from './dmog-settings.component';

describe('DmogSettingsComponent', () => {
  let component: DmogSettingsComponent;
  let fixture: ComponentFixture<DmogSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DmogSettingsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(DmogSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
