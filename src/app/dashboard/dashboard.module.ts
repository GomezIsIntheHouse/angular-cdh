import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forChild([
      {  
        path: 'estudiantes',
        loadChildren: () => import('./pages/alumnos/alumnos.module').then((m) => m.AlumnosModule)
      },
      {
        path: 'cursos',    
        loadChildren: () => import('./pages/cursos/cursos.module').then((m) => m.CursosModule) 
      }
    ])
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
