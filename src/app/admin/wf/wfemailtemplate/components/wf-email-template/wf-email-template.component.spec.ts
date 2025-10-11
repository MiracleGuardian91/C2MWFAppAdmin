import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfEmailTemplateComponent } from './wf-email-template.component';

describe('WfEmailTemplateComponent', () => {
  let component: WfEmailTemplateComponent;
  let fixture: ComponentFixture<WfEmailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WfEmailTemplateComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
