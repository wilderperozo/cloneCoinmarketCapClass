import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCoinsComponent } from './listado-coins.component';

describe('ListadoCoinsComponent', () => {
  let component: ListadoCoinsComponent;
  let fixture: ComponentFixture<ListadoCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
