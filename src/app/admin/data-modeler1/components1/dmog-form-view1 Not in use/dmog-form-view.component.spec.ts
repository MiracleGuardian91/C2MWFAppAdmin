import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmogFormViewComponent } from './dmog-form-view.component';

describe('DmogFormViewComponent', () => {
  let component: DmogFormViewComponent;
  let fixture: ComponentFixture<DmogFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DmogFormViewComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmogFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
