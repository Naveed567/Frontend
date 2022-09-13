import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iteacherschedules } from '../teacherschedules/teacherschedules';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherschedulteService {

  private _url = 'https://test.canadawebservices.com/api/teacherschedule'
  constructor(private  http : HttpClient) { }
 
  list(id: number) : Observable<Iteacherschedules[]>{
    var murl = this._url +'/'+id;
    return this.http.get<Iteacherschedules[]>(murl);
  }
  update(teacherschedule : Iteacherschedules) : Observable<Iteacherschedules>{
    var mcurl = this._url +'/'+teacherschedule.id;
    return this.http.put<Iteacherschedules>(mcurl, teacherschedule);

  }
   


}
