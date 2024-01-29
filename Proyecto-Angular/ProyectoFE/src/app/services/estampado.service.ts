import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estampado } from '../interface/estampado';

@Injectable({
  providedIn: 'root'
})
export class EstampadoService {
  myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Estampado/';

  constructor(private http: HttpClient) { }

  getEstampado():Observable<Estampado[]>{
    return this.http.get<Estampado[]>(this.myAppUrl + this.myApiUrl);
  }

  getEstamps(id:number): Observable<Estampado>{
    return this.http.get<Estampado>(this.myAppUrl + this.myApiUrl + id);
  }

  addEstampado(estampado:Estampado): Observable<Estampado>{
    return this.http.post<Estampado>(this.myAppUrl + this.myApiUrl , estampado)
  }

  deleteEstampado(id: number): Observable<void>{
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + id);
  }
}
