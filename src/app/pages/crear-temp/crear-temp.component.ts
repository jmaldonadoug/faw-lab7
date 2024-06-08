import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-temp',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-temp.component.html',
  styleUrl: './crear-temp.component.css'
})
export class CrearTempComponent {
  @Output() guardarEvent = new EventEmitter<FormGroup>();

  form = new FormGroup({
    grados: new FormControl(0),
    tipo: new FormControl('c')
  });

  guardar() {
    this.guardarEvent.emit(this.form);
  }
}
