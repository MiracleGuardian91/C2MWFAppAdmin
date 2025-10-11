import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCornerDetailComponent } from './top-corner-detail.component';

describe('TopCornerDetailComponent', () => {
  let component: TopCornerDetailComponent;
  let fixture: ComponentFixture<TopCornerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TopCornerDetailComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCornerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
