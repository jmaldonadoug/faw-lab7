import { Component } from '@angular/core';
import { CrearTempComponent } from '../crear-temp/crear-temp.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conversiones',
  standalone: true,
  imports: [CrearTempComponent],
  templateUrl: './conversiones.component.html',
  styleUrl: './conversiones.component.css'
})
export class ConversionesComponent {
  data: Grado[] = [];

  getForm(form: FormGroup) {
    const newData = this.data;
    const grados = form.value.grados;
    
    let c = 0, f = 0;
    if (form.value.tipo === 'c') {
      c = grados;
      f = Number(((c * 1.8) + 32).toFixed(2));
    } else {
      f = grados;
      c = Number(((f - 32) / 1.8).toFixed(2));
    }
    newData.push({ grados, c, f, tipo: form.value.tipo });

    this.data = newData;
  }
}

export class Grado {
  grados: number;
  tipo: string;
  c: number;
  f: number;

  constructor(g: number, t: string, c: number, f: number) {
    this.grados = g;
    this.tipo = t;
    this.c = c;
    this.f = f;
  }
}
