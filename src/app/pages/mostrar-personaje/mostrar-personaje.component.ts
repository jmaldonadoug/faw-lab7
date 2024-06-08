import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-personaje',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-personaje.component.html',
  styleUrl: './mostrar-personaje.component.css'
})
export class MostrarPersonajeComponent {
  @Input() img = '';

}
