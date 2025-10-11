import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerColumnSettingsComponent } from './container-column-settings.component';

describe('ContainerColumnSettingsComponent', () => {
  let component: ContainerColumnSettingsComponent;
  let fixture: ComponentFixture<ContainerColumnSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ContainerColumnSettingsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ContainerColumnSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
