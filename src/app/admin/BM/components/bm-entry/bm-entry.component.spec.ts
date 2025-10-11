import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmEntryComponent } from './bm-entry.component';

describe('BmEntryComponent', () => {
  let component: BmEntryComponent;
  let fixture: ComponentFixture<BmEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BmEntryComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
