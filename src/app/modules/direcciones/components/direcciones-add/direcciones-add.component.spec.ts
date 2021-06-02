import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionesAddComponent } from './direcciones-add.component';

describe('DireccionesAddComponent', () => {
  let component: DireccionesAddComponent;
  let fixture: ComponentFixture<DireccionesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
