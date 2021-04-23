import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCaracteristicasComponent } from './tabla-caracteristicas.component';

describe('TablaCaracteristicasComponent', () => {
  let component: TablaCaracteristicasComponent;
  let fixture: ComponentFixture<TablaCaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCaracteristicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
