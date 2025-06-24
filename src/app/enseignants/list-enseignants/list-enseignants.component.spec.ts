import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnseignantsComponent } from './list-enseignants.component';

describe('ListEnseignantsComponent', () => {
  let component: ListEnseignantsComponent;
  let fixture: ComponentFixture<ListEnseignantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEnseignantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEnseignantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
