import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmogDetailComponent } from './bmog-detail.component';

describe('BmogDetailComponent', () => {
  let component: BmogDetailComponent;
  let fixture: ComponentFixture<BmogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BmogDetailComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
