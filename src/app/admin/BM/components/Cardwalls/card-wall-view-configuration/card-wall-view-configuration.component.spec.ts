import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWallViewConfigurationComponent } from './card-wall-view-configuration.component';

describe('CardWallViewConfigurationComponent', () => {
  let component: CardWallViewConfigurationComponent;
  let fixture: ComponentFixture<CardWallViewConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWallViewConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWallViewConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
