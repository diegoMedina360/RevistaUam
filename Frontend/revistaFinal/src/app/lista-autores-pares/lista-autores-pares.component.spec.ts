import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAutoresParesComponent } from './lista-autores-pares.component';

describe('ListaAutoresParesComponent', () => {
  let component: ListaAutoresParesComponent;
  let fixture: ComponentFixture<ListaAutoresParesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAutoresParesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAutoresParesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
