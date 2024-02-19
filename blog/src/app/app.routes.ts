import { Routes } from '@angular/router';
import { ListadoComponent } from './post/listado/listado.component';
import { VistaIndividualComponent } from './post/vista/vista.component';
import { CreacionComponent } from './post/creacion/creacion.component';
import { ActualizacionComponent } from './post/actualizacion/actualizacion.component';


export const routes: Routes = [
  { path: 'listado/:id', component: ListadoComponent },
  { path: 'vista/:id', component: VistaIndividualComponent },
  { path: 'creacion/:id', component: CreacionComponent },
  { path: 'actualizacion/:id', component: ActualizacionComponent },
  { path: '**', component: ListadoComponent },
];