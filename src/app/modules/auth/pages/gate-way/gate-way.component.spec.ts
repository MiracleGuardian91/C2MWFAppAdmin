import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateWayComponent } from './gate-way.component';

describe('GateWayComponent', () => {
  let component: GateWayComponent;
  let fixture: ComponentFixture<GateWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GateWayComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(GateWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
