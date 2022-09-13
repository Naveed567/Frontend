import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iteacher } from '../teacher/teacher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private _url = 'https://test.canadawebservices.com/api/teachers'
  constructor(private  http : HttpClient) { }
  
  list() : Observable<Iteacher[]>{

    return this.http.get<Iteacher[]>(this._url);
  }
  
  add(teacher:Iteacher) : Observable<Iteacher> {
    return this.http.post<Iteacher>(this._url,teacher);
  }

  update(teacher:Iteacher) : Observable<Iteacher> {
    var murl = this._url +'/'+teacher.id;
    return this.http.put<Iteacher>(murl,teacher);
  }

  delete(teacher:Iteacher) : Observable<Boolean> {
    return this.http.delete<Boolean>(`${this._url}/${teacher.id}`);
  }
 

}
