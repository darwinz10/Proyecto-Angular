import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interface/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Cliente/';

  constructor(private http: HttpClient) { }

  getCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.myAppUrl + this.myApiUrl);
  }

  getClient(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(this.myAppUrl + this.myApiUrl + id);
  }

  addCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.myAppUrl + this.myApiUrl , cliente)
  }

  updateCliente(id: number, cliente: Cliente):Observable<void> {
    return this.http.put<void>(this.myAppUrl + this.myApiUrl + id, cliente);
  }

  deleteCliente(id: number): Observable<void>{
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + id);
  }
}
