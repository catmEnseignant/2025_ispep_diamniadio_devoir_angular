import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnseignant } from './list-enseignant';

describe('ListEnseignant', () => {
  let component: ListEnseignant;
  let fixture: ComponentFixture<ListEnseignant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEnseignant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEnseignant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
