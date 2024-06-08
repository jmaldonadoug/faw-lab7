import { Routes } from '@angular/router';
import { ConversionesComponent } from './pages/conversiones/conversiones.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';

export const routes: Routes = [
    { path: 'conversiones', component: ConversionesComponent },
    { path: 'personajes', component: PersonajesComponent }
];
