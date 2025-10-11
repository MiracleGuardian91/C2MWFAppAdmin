import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmBreadcrumbsComponent } from './dm-breadcrumbs.component';

describe('DmBreadcrumbsComponent', () => {
  let component: DmBreadcrumbsComponent;
  let fixture: ComponentFixture<DmBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DmBreadcrumbsComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
