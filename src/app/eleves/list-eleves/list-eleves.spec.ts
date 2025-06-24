import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEleves } from './list-eleves';

describe('ListEleves', () => {
  let component: ListEleves;
  let fixture: ComponentFixture<ListEleves>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEleves]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEleves);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
