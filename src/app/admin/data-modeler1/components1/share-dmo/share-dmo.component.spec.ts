import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDmoComponent } from './share-dmo.component';

describe('ShareDmoComponent', () => {
  let component: ShareDmoComponent;
  let fixture: ComponentFixture<ShareDmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ShareDmoComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ShareDmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
