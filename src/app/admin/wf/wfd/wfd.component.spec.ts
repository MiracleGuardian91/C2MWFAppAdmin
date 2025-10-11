import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfdComponent } from './wfd.component';

describe('WfdComponent', () => {
  let component: WfdComponent;
  let fixture: ComponentFixture<WfdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WfdComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
