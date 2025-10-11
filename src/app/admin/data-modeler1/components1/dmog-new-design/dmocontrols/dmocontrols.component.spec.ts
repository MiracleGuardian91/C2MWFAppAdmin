import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMOControlsComponent } from './dmocontrols.component';

describe('DMOControlsComponent', () => {
  let component: DMOControlsComponent;
  let fixture: ComponentFixture<DMOControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DMOControlsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(DMOControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
