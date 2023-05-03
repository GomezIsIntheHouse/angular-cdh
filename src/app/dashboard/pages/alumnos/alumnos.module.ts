import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoDetalleComponent } from './pages/alumno-detalle/alumno-detalle.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/auth/guards/admin.guard';


@NgModule({
  declarations: [
    AlumnosComponent,
    AbmAlumnosComponent,
    AlumnoDetalleComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    PipesModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AlumnosRoutingModule,
    //BUENA PRACTICA ES CREAR UN MODULO APARTE PARA RUTAS, POR EJ ALUMNOS-ROUTING.MODULE.TS
    RouterModule.forChild([
      {
        path: '',
        component: AlumnosComponent
      },
      {
        path: ':id',
        component: AlumnoDetalleComponent,
      },
    ]),
  ],
  exports: [
    AlumnosComponent
  ]
})
export class AlumnosModule { }
