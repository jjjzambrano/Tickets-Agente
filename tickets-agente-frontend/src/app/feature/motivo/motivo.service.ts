import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Motivo } from './motivo';

@Injectable({
  providedIn: 'root'
})
export class MotivoService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/motivo";

  public save(motivo: Motivo): Observable<Motivo>{
    return this.http.post<Motivo>(this.url+"/save", motivo, this.httpOptions);
  }

  public findById(id: number): Observable<Motivo>{
    return this.http.get<Motivo>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Motivo>{
    return this.http.delete<Motivo>(this.url+"/deleteById/"+id, this.httpOptions);
  }

<<<<<<< HEAD
  public findAll(): Observable<Motivo[]>{
    return this.http.get<Motivo[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByName(term: string): Observable<Motivo[]>{
    return this.http.get<Motivo[]>(this.url+"/findByName/"+term, this.httpOptions)
  }

=======
>>>>>>> rol
}
