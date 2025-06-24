import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantModelComponent } from './enseignant.model.component';

describe('EnseignantModelComponent', () => {
  let component: EnseignantModelComponent;
  let fixture: ComponentFixture<EnseignantModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnseignantModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignantModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
