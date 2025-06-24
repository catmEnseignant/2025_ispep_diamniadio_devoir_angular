import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEnseignantsComponent } from './ajout-enseignants.component';

describe('AjoutEnseignantsComponent', () => {
  let component: AjoutEnseignantsComponent;
  let fixture: ComponentFixture<AjoutEnseignantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutEnseignantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutEnseignantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
