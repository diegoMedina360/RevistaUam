import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarParComponent } from './asignar-par.component';

describe('AsignarParComponent', () => {
  let component: AsignarParComponent;
  let fixture: ComponentFixture<AsignarParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
