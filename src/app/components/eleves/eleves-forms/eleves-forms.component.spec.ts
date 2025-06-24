import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevesFormsComponent } from './eleves-forms.component';

describe('ElevesFormsComponent', () => {
  let component: ElevesFormsComponent;
  let fixture: ComponentFixture<ElevesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElevesFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
