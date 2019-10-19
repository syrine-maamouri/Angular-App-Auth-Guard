import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  baseUrl: string = "http://40.114.252.223:5400/users/login";
  constructor(private http: HttpClient) { }


  login(data){
    return this.http.post(this.baseUrl,data);
  }
}
