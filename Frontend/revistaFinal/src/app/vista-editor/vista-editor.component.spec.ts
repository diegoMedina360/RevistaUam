import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEditorComponent } from './vista-editor.component';

describe('VistaEditorComponent', () => {
  let component: VistaEditorComponent;
  let fixture: ComponentFixture<VistaEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
