import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEleves } from './form-eleves';

describe('FormEleves', () => {
  let component: FormEleves;
  let fixture: ComponentFixture<FormEleves>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEleves]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEleves);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
