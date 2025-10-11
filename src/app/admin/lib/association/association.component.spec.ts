import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationComponent } from './association.component';

describe('AssociationComponent', () => {
  let component: AssociationComponent<any>;
  let fixture: ComponentFixture<AssociationComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AssociationComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
