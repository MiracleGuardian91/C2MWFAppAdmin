import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateXmlComponent } from './generatexml.component';

describe('GeneratexmlComponent', () => {
  let component: GenerateXmlComponent;
  let fixture: ComponentFixture<GenerateXmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GenerateXmlComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(GenerateXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
