import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compra } from '../interface/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private myApiUrl: string = 'api/Compra/';
  myAppUrl: string = environment.endpoint;

  constructor(private http: HttpClient) { }

  getCompra(): Observable<Compra[]>{
    //console.log(this.myAppUrl + this.myApiUrl);
    return this.http.get<Compra[]>(this.myAppUrl + this.myApiUrl);
  }

  getPedido(id:number): Observable<Compra>{
    return this.http.get<Compra>(this.myAppUrl + this.myApiUrl + id);
  }

  addCompra(compra:Compra): Observable<Compra>{
    return this.http.post<Compra>(this.myAppUrl + this.myApiUrl , compra)
  }

  deleteCompra(id: number): Observable<void>{
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + id);
  }

}
