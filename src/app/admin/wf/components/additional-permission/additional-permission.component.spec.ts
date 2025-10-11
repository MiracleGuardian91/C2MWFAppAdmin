import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalPermissionComponent } from './additional-permission.component';

describe('AdditionalPermissionComponent', () => {
  let component: AdditionalPermissionComponent;
  let fixture: ComponentFixture<AdditionalPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AdditionalPermissionComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
