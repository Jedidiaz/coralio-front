import { DataInfoAdminModel, ResponseGetAdminModel, ResponseGetIDAdminModel, ResposeGetAdminTerapiasModel, ResposeGetAdminTerapiasIDModel, ResponseGetAdminBlogModel, ResponseGetAdminBlogOneModel } from './../Models/AdminModels.interface';
import { ResponseAuth } from './../Models/auth.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  // url = 'https://api-coralio.cmc-software.com/api'

  // url = 'http://25.78.142.190:9000/api'

  // url = 'http://25.65.134.189:9000/api'
  url = 'https://coralio.onrender.com/api'

  // url = 'https://contenedor-production.up.railway.app/api'

  headers = new HttpHeaders()
  .append('Authorization', 'Bearer ' + localStorage.getItem('token'))

  headersPut = new HttpHeaders()
  .append('Authorization', 'Bearer ' + localStorage.getItem('token'))
  .append('Content-Type', 'application/json')

  //auth
  loginT(body: FormData):Observable<ResponseAuth>{
    return this.http.post<ResponseAuth>(`${this.url}/login`, body)
  }

  registerp(body: FormData):Observable<ResponseAuth>{
    return this.http.post<ResponseAuth>(`${this.url}/registerp`, body)
  }

  registert(body: FormData):Observable<ResponseAuth>{
    return this.http.post<ResponseAuth>(`${this.url}/registert`, body)
  }

   //admin
  //terapeutas y pacientes ----------------------------------------**------------------------
  getAdmin(url: any):Observable<ResponseGetAdminModel>{
    return this.http.get<ResponseGetAdminModel>(`${this.url}/admin/${url}`, {
      headers: this.headers
    })
  }

  getAdminById(url: any, id: any):Observable<ResponseGetIDAdminModel>{
    return this.http.get<ResponseGetIDAdminModel>(`${this.url}/admin/${url}/${id}`, {
      headers: this.headers
    })
  }

  getAdminTerapias():Observable<ResposeGetAdminTerapiasModel>{
    return this.http.get<ResposeGetAdminTerapiasModel>(`${this.url}/admin/seete`, {
      headers: this.headers
    })
  }

  getAdminTerapiasById(id: any):Observable<ResposeGetAdminTerapiasIDModel>{
    return this.http.get<ResposeGetAdminTerapiasIDModel>(`${this.url}/admin/seete/${id}`, {
      headers: this.headers
    })
  }

  //update admin cruds ---------------* --------------------

  updateAdmin(form: FormData, url: any, id: any):Observable<any>{
    return this.http.put<any>(`${this.url}/admin/${url}/${id}`, form, {
      headers: this.headers
    })
  }

  updateAdminPassword(form: FormData, id: any):Observable<any>{
    return this.http.put<any>(`${this.url}/admin/editp/${id}`, form, {
      headers: this.headers
    })
  }

  updateAdminVideo(form: FormData, url: any, id: any):Observable<any>{
    return this.http.put<any>(`${this.url}/admin/${url}/${id}`, form, {
      headers: this.headers
    })
  }

  //update admin cruds ---------------* --------------------

  createAdmin(form: FormData, url: any):Observable<any>{
    return this.http.post<any>(`${this.url}/admin/${url}`, form, {
      headers: this.headers
    })
  }

  deleteAdmin(id: any):Observable<any>{
    return this.http.delete<any>(`${this.url}/admin/remove/${id}`,{
      headers: this.headers
    })
  }

  deleteAdminTerapia(id: any):Observable<any>{
    return this.http.delete<any>(`${this.url}/admin/removete/${id}`,{
      headers: this.headers
    })
  }

  // updateStatus():Observable<any>{
  //   return this.http.put<any>(`${this.url}/admin/status/${id}`, {
  //     headers: this.headers,
  //   })
  // }

  updateStatus(id: any):Observable<ResponseAuth>{
    const body = {}
    return this.http.put<ResponseAuth>(`${this.url}/admin/status/${id}`, body,{
      headers: this.headers
    })
  }

  //blogs
  getBlogs():Observable<ResponseGetAdminBlogModel>{
    return this.http.get<ResponseGetAdminBlogModel>(`${this.url}/admin/seepub`, {
      headers: this.headers
    })
  }

  getBlogsByID(id: any):Observable<ResponseGetAdminBlogOneModel>{
    return this.http.get<ResponseGetAdminBlogOneModel>(`${this.url}/admin/seepub/${id}`, {
      headers: this.headers
    })
  }

  deleteAdminblogs(id: any):Observable<any>{
    return this.http.delete<any>(`${this.url}/admin/removepub/${id}`,{
      headers: this.headers
    })
  }

  //usuarios
  getUserLogged():Observable<any>{
    return this.http.get<any>(`${this.url}/user/see`, {headers: this.headers})
  }

  updateUserInfo(body: FormData, urlLink: any):Observable<ResponseAuth>{
    return this.http.put<ResponseAuth>(`${this.url}/${urlLink}`, body,{
      headers: this.headers
    })
  }

}

