import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveModelComponent } from './eleve.model.component';

describe('EleveModelComponent', () => {
  let component: EleveModelComponent;
  let fixture: ComponentFixture<EleveModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EleveModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleveModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
