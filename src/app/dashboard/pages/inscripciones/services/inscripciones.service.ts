import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inscripcion, InscripcionWithAll, CreateInscripcionData } from '../models';
import { Observable, concatMap  } from 'rxjs';
import { enviroment } from 'src/environments/environments';



@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  constructor(private httpClient: HttpClient) { }


  createInscripcion(data: CreateInscripcionData): Observable<InscripcionWithAll> {
    return this.httpClient
      .post<Inscripcion>(`${enviroment.baseApiUrl}/inscriptions`, data)
      .pipe(
        concatMap((createResponse) =>
          this.getInscriptionWithAllById(createResponse.id)
        )
      );
  }

  getAllInscripciones(): Observable<InscripcionWithAll[]> {

    return this.httpClient.get<InscripcionWithAll[]>(
      
      `${enviroment.baseApiUrl}/inscriptions?_expand=course&_expand=student&_expand=subject`
    );
  }

  getInscriptionWithAllById(id: number): Observable<InscripcionWithAll> {
    return this.httpClient.get<InscripcionWithAll>(
      `${enviroment.baseApiUrl}/inscriptions/${id}?_expand=student&_expand=subject&_expand=course`
    )
  }
  
  

  deleteInscripcionById(id: number): Observable<unknown> {
    return this.httpClient.delete(
      `${enviroment.baseApiUrl}/inscriptions/${id}`
    );
  }
}
