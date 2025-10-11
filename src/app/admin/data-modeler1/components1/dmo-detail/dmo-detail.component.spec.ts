import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmoDetailComponent } from './dmo-detail.component';

describe('DmoNewentryFormComponent', () => {
  let component: DmoDetailComponent;
  let fixture: ComponentFixture<DmoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DmoDetailComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
