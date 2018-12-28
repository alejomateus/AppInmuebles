import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {
  citys: [];
  url:string;
  constructor(private http: HttpClient) { 
    this.url ="http://192.168.0.10/inmueblesapi/public/api";
  }
  
  getCitys(){
    return this.http.get(`${this.url}/cities`);
  }
  getInmuebles(){
    return this.http.get(`${this.url}/inmuebles`);
  }
  createInmueble(data){
    return this.http.post(`${this.url}/inmuebles`,data);
  }
}