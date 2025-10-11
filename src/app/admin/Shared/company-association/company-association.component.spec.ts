import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAssociationComponent } from './company-association.component';
import { SearchColumnPipe, SearchDMOPipe } from '@app/shared/pipe/search-column.pipe';

describe('CompanyAssociationComponent', () => {
  let component: CompanyAssociationComponent;
  let fixture: ComponentFixture<CompanyAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CompanyAssociationComponent, SearchColumnPipe, SearchDMOPipe]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
