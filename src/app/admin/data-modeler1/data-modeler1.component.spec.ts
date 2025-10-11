import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModeler1Component } from './data-modeler1.component';

describe('DataModeler1Component', () => {
  let component: DataModeler1Component;
  let fixture: ComponentFixture<DataModeler1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DataModeler1Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(DataModeler1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
