import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmogContainerComponent } from './dmog-container.component';

describe('DmogContainerComponent', () => {
  let component: DmogContainerComponent;
  let fixture: ComponentFixture<DmogContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DmogContainerComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(DmogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
