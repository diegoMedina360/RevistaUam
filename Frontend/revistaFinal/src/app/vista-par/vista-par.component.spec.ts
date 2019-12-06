import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaParComponent } from './vista-par.component';

describe('VistaParComponent', () => {
  let component: VistaParComponent;
  let fixture: ComponentFixture<VistaParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
