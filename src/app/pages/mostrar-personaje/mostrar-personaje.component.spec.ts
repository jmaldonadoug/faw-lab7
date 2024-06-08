import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPersonajeComponent } from './mostrar-personaje.component';

describe('MostrarPersonajeComponent', () => {
  let component: MostrarPersonajeComponent;
  let fixture: ComponentFixture<MostrarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarPersonajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
