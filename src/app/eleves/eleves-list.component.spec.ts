import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevesListComponent } from './eleves-list.component';

describe('ElevesListComponent', () => {
  let component: ElevesListComponent;
  let fixture: ComponentFixture<ElevesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElevesListComponent]
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
