import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlaceholderDmoMappingComponent } from './card-placeholder-dmo-mapping.component';

describe('CardPlaceholderDmoMappingComponent', () => {
  let component: CardPlaceholderDmoMappingComponent;
  let fixture: ComponentFixture<CardPlaceholderDmoMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPlaceholderDmoMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlaceholderDmoMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
