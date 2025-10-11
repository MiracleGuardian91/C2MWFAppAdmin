import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmDetailComponent } from './bm-detail.component';

describe('BmDetailComponent', () => {
  let component: BmDetailComponent;
  let fixture: ComponentFixture<BmDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BmDetailComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
