import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';


describe('ChecklistComponent', () => {
  let component: ListComponent<any>;
  let fixture: ComponentFixture<ListComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ListComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
