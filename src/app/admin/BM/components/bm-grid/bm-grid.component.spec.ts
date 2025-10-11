import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmGridComponent } from './bm-grid.component';

describe('BmGridComponent', () => {
  let component: BmGridComponent;
  let fixture: ComponentFixture<BmGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BmGridComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
