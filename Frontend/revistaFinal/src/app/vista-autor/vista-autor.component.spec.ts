import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAutorComponent } from './vista-autor.component';

describe('VistaAutorComponent', () => {
  let component: VistaAutorComponent;
  let fixture: ComponentFixture<VistaAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
