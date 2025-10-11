import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderEntityComponent } from './builder-entity.component';

describe('AiFlowBuilderComponent', () => {
  let component: BuilderEntityComponent;
  let fixture: ComponentFixture<BuilderEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuilderEntityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
