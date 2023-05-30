import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesComponent } from './inscripciones.component';

//1ero defino las rutas
const routes: Routes = [
  {
    //el path vacio hace referencia a dashboadr/insc
    path: '', // hace referencia de lo que sigue desde aca.. si le pusieramos alguna ruta especifica
    component: InscripcionesComponent
  }
]
//2do declaro el routerModule y le inyecto el objeto de rutas creado
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
   
  ],
  //3ero exporto el routerModule
  exports:[
    RouterModule
  ]
})
//4to declaro en el modulo del componente, (inscripciones.module.ts), el InscripcionesRoutingModule
export class InscripcionesRoutingModule { }
