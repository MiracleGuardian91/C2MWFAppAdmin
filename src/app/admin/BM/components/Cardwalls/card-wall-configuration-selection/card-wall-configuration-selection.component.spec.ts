import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWallConfigurationSelectionComponent } from './card-wall-configuration-selection.component';

describe('CardWallConfigurationSelectionComponent', () => {
  let component: CardWallConfigurationSelectionComponent;
  let fixture: ComponentFixture<CardWallConfigurationSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWallConfigurationSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWallConfigurationSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
