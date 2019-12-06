import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarParComponent } from './calificar-par.component';

describe('CalificarParComponent', () => {
  let component: CalificarParComponent;
  let fixture: ComponentFixture<CalificarParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificarParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
