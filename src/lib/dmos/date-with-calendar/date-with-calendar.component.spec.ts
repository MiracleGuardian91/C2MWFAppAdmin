import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWithCalendarComponent } from './date-with-calendar.component';

describe('DateWithCalendarComponent', () => {
  let component: DateWithCalendarComponent;
  let fixture: ComponentFixture<DateWithCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DateWithCalendarComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWithCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
