import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmoComponent } from './dmo.component';

describe('DmoComponent', () => {
  let component: DmoComponent;
  let fixture: ComponentFixture<DmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DmoComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
