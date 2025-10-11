import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDiagramComponent } from './ai-diagram.component';

describe('AiDiagramComponent', () => {
  let component: AiDiagramComponent;
  let fixture: ComponentFixture<AiDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiDiagramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
