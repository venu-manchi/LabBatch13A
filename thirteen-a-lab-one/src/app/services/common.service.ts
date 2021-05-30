import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  commonGetHandler(url: string): Observable<any>{
    return this.http.get(url);
  }
  // getBookById(url:string, bookId:number):Observable<any>{
  //   return this.http.get(`${url}/${id}`);
  // }

  commonPostHandler(url: string, data: any): Observable<any>{
    return this.http.post(url,data);
  }

  commonPutHandler(url: string, data: any): Observable<any>{
    return this.http.put(url, data);
  }

  commonDeleteHandler(url: string): Observable<any>{
    return this.http.delete(url);
  }
}
