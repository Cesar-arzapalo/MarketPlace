import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioSidebarComponent } from './usuario-sidebar.component';

describe('UsuarioSidebarComponent', () => {
  let component: UsuarioSidebarComponent;
  let fixture: ComponentFixture<UsuarioSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
