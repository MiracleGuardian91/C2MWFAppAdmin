import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridConfigStaticColComponent } from './grid-config-static-col.component';

describe('GridConfigStaticColComponent', () => {
  let component: GridConfigStaticColComponent;
  let fixture: ComponentFixture<GridConfigStaticColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GridConfigStaticColComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(GridConfigStaticColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
