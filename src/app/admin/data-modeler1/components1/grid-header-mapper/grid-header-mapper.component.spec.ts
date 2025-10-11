import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHeaderMapperComponent } from './grid-header-mapper.component';

describe('GridHeaderMapperComponent', () => {
  let component: GridHeaderMapperComponent;
  let fixture: ComponentFixture<GridHeaderMapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridHeaderMapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridHeaderMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
