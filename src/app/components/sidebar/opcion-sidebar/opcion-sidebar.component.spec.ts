import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionSidebarComponent } from './opcion-sidebar.component';

describe('OpcionSidebarComponent', () => {
  let component: OpcionSidebarComponent;
  let fixture: ComponentFixture<OpcionSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
