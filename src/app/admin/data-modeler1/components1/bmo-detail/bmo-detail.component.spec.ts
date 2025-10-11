import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmoDetailComponent } from './bmo-detail.component';

describe('BmoDetailComponent', () => {
  let component: BmoDetailComponent;
  let fixture: ComponentFixture<BmoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BmoDetailComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
