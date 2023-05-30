import { Component, OnInit } from '@angular/core';
import { InscripcionesService } from './services/inscripciones.service';
import { Store } from '@ngrx/store';

import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { State } from './store/inscripciones.reducer';

import { selectInscripcionesState } from './store/inscripciones.selectors';
import { InscripcionesActions } from './store/inscripciones.actions';

import { InscripcionDialogComponent } from './components/inscripcion-dialog/inscripcion-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})

export class InscripcionesComponent implements OnInit  {
  
  dataSource = new MatTableDataSource();

  state$: Observable<State>;

  displayedColumns = [
    "nameStudent",
    "nameSubject",
    "actions"
  ]

  constructor(private inscripcionesService:InscripcionesService,
              private matDialog: MatDialog,
              private store:Store
    ){
      this.state$ = this.store.select(selectInscripcionesState);
  }

  ngOnInit():void{
    this.store.dispatch(InscripcionesActions.loadInscripciones())
      
    // this.inscripcionesService.getAllInscripciones().subscribe(console.log)
  }

  eliminarInscripcionPorId(id: number): void {
    this.store.dispatch(InscripcionesActions.deleteInscripcion({ id }));
  }

  crearInscripcion(): void {
    this.matDialog.open(InscripcionDialogComponent);
  }

}
