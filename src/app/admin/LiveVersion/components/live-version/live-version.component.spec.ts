import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveVersionComponent } from './live-version.component';

describe('LiveVersionComponent', () => {
  let component: LiveVersionComponent;
  let fixture: ComponentFixture<LiveVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LiveVersionComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
