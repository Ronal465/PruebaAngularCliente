import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Sirve Para hacer peticiones http
import { Observable } from 'rxjs';
import { Pelicula } from "../Models/Pelicula";

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  ApiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }
  
  GetPeliculas(): Observable<any> {

    return this.http.get(`${this.ApiURL}/get/Peliculas`);


  }
  GetPeliculasPorNombre(Nombre): Observable<any> {

    return this.http.post(`${this.ApiURL}/get/Peliculas`,Nombre);


  }  
  GetEstadosPeliculas(): Observable<any> {

    return this.http.get(`${this.ApiURL}/get/Peliculas/Estados/Peliculas`);

  }
  GetPeliculasPublicas(): Observable<any> {

    return this.http.get(`${this.ApiURL}/get/Peliculas/Publicas`);

  }
  CreatePeliculas(Pelicula:Pelicula): Observable<any> {

    return this.http.post(`${this.ApiURL}/Crear/Peliculas`,Pelicula);

  }
  UpdatePeliculas(Pelicula:Pelicula): Observable<any> {

    return this.http.put(`${this.ApiURL}/Actualizar/Peliculas`,Pelicula);

  }
  DeletePeliculas(Pelicula:Pelicula): Observable<any> {

    return this.http.put(`${this.ApiURL}/Delete/Peliculas`,Pelicula);

  }
  RentarPelicula(json): Observable<any> {

    return this.http.post(`${this.ApiURL}/Rentar/Pelicula`,json);

  }
 

}
