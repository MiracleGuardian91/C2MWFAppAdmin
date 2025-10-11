import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmogDetailComponent } from './dmog-detail.component';

describe('DmogDetailComponent', () => {
  let component: DmogDetailComponent;
  let fixture: ComponentFixture<DmogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DmogDetailComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
