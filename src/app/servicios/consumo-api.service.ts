import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foto } from '../modelos/fotos';

@Injectable({
  providedIn: 'root',
})
export class ConsumoApiService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getListadoFotos(): Observable<Foto[]> {
    return this.http.get<Foto[]>(this.apiUrl);
  }
}
