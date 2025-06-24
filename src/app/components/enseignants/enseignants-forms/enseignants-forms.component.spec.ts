import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantsFormsComponent } from './enseignants-forms.component';

describe('EnseignantsFormsComponent', () => {
  let component: EnseignantsFormsComponent;
  let fixture: ComponentFixture<EnseignantsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnseignantsFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignantsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
