import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AutocompleteSearchBoxComponent } from './autocomplete-search-box.component';

describe('AutocompleteSearchBoxComponent', () => {
  let component: AutocompleteSearchBoxComponent;
  let fixture: ComponentFixture<AutocompleteSearchBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [AutocompleteSearchBoxComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
