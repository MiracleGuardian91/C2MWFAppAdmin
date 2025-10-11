import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmogSharedDmoComponent } from './dmog-shared-dmo.component';

describe('DmogSharedDmoComponent', () => {
  let component: DmogSharedDmoComponent;
  let fixture: ComponentFixture<DmogSharedDmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DmogSharedDmoComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(DmogSharedDmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
