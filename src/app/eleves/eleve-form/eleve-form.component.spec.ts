import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEleveComponent } from './eleve-form.component';

describe('EleveFormComponent', () => {
  let component: FormEleveComponent;
  let fixture: ComponentFixture<FormEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEleveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
