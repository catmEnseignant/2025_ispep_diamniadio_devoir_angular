import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevesFormComponent } from './eleves-form.component';

describe('ElevesFormComponent', () => {
  let component: ElevesFormComponent;
  let fixture: ComponentFixture<ElevesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElevesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
