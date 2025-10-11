import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeablePanelComponent } from './resizeable-panel.component';

describe('ResizeablePanelComponent', () => {
  let component: ResizeablePanelComponent;
  let fixture: ComponentFixture<ResizeablePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ResizeablePanelComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ResizeablePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
