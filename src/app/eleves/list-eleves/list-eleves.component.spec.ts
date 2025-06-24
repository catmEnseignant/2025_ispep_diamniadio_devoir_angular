import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElevesComponent } from './list-eleves.component';

describe('ListElevesComponent', () => {
  let component: ListElevesComponent;
  let fixture: ComponentFixture<ListElevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListElevesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
