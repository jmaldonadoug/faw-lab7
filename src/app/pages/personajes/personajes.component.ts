import { Component } from '@angular/core';
import { MostrarPersonajeComponent } from '../mostrar-personaje/mostrar-personaje.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [MostrarPersonajeComponent, ReactiveFormsModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  data = [
    {
      id: '1',
      name: 'Rick Sanchez',
      img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
      id: '2',
      name: 'Morty Smith',
      img: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    },
    {
      id: '3',
      name: 'Summer Smith',
      img: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    },
    {
      id: '4',
      name: 'Beth Smith',
      img: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
    }
  ]
  form = new FormGroup({
    personaje: new FormControl('https://rickandmortyapi.com/api/character/avatar/1.jpeg')
  });


}
