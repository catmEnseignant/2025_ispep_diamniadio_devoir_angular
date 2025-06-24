import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantsFormComponent } from './enseignants-form.component'; // ou '../' selon ton chemin


describe('EnseignantsFormComponent', () => {
  let component: EnseignantsFormComponent;
  let fixture: ComponentFixture<EnseignantsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnseignantsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignantsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
