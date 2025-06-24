import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevesListComponent } from './eleves-list/eleves-list.component';

describe('ElevesListComponent', () => {
  let component: ElevesListComponent;
  let fixture: ComponentFixture<ElevesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElevesListComponent]  // ou imports si standalone
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
