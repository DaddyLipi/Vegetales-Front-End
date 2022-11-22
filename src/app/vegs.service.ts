import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Veg } from './Veg';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VegsService {

  private vegUrl = 'http://localhost:3000/vegs';

  constructor(private http: HttpClient) { }

  getVegetales(): Observable<Veg[]>
  {
    return this.http.get<Veg[]>(this.vegUrl);
  }

  getVegetal(id: number): Observable<Veg>
  {
    const url = `${this.vegUrl}/${id}`;
    return this.http.get<Veg>(url);
  }
  addVegetal(veg: Veg): Observable<Veg>
  {
    return this.http.post<Veg>(this.vegUrl,veg);
  }
  deleteVegetal(id: number): Observable<Veg>{
    const url = `${this.vegUrl}/${id}`;
    return this.http.delete<Veg>(url);
  }
  updateVegetal(veg: Veg): Observable<any>{
    return this.http.put(this.vegUrl,veg);
  }
  searchVegetales(term:string): Observable<Veg[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Veg[]>(`${this.vegUrl}/?nombre=${term}`);
  }

}
