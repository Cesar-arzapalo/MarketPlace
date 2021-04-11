import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEntregaComponent } from './tipo-entrega.component';

describe('TipoEntregaComponent', () => {
  let component: TipoEntregaComponent;
  let fixture: ComponentFixture<TipoEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
