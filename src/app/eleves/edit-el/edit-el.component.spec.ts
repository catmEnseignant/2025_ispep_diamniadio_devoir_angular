import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElComponent } from './edit-el.component';

describe('EditElComponent', () => {
  let component: EditElComponent;
  let fixture: ComponentFixture<EditElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditElComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
