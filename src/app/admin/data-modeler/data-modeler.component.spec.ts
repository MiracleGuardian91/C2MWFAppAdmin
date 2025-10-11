import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModelerComponent } from './data-modeler.component';

describe('DataModelerComponent', () => {
  let component: DataModelerComponent;
  let fixture: ComponentFixture<DataModelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DataModelerComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
