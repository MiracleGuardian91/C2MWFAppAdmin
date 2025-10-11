import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectControlComponent } from './object-control.component';

describe('ObjectControlComponent', () => {
  let component: ObjectControlComponent<any>;
  let fixture: ComponentFixture<ObjectControlComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ObjectControlComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
