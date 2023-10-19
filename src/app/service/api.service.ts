import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IData } from '../interface/dataCharacters';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://rickandmortyapi.com/api';

  constructor(private http:HttpClient) { }

  public getCharacters():Observable<any>{
    return this.http.get(`${this.urlApi}/character`);
  }
}
