import { ResponseAuth } from './../Models/auth.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  url = 'http://25.65.134.189:9000/api'

  //auth
  loginP(body: FormData):Observable<ResponseAuth>{
    return this.http.post<ResponseAuth>(`${this.url}/paciente/login`, body)
  }

  loginT(body: FormData):Observable<ResponseAuth>{
    return this.http.post<ResponseAuth>(`${this.url}/terapeuta/login`, body)
  }


}

