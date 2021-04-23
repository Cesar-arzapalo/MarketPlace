import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoBuscadorComponent } from './producto-buscador.component';

describe('ProductoBuscadorComponent', () => {
  let component: ProductoBuscadorComponent;
  let fixture: ComponentFixture<ProductoBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoBuscadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
