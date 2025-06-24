import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnseignantComponent } from './enseignant-form.component';

describe('EnseignantFormComponent', () => {
  let component:  FormEnseignantComponent;
  let fixture: ComponentFixture< FormEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormEnseignantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent( FormEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
