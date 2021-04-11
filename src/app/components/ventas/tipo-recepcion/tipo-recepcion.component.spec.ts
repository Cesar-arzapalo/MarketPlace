import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRecepcionComponent } from './tipo-recepcion.component';

describe('TipoRecepcionComponent', () => {
  let component: TipoRecepcionComponent;
  let fixture: ComponentFixture<TipoRecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoRecepcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
