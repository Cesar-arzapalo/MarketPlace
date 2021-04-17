import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCarroComponent } from './producto-carro.component';

describe('ProductoCarroComponent', () => {
  let component: ProductoCarroComponent;
  let fixture: ComponentFixture<ProductoCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoCarroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
