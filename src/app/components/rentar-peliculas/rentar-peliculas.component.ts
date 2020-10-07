import { Component, OnInit } from '@angular/core';
import { PeliculaService } from "../../services/pelicula.service";
import { FormControl, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/Models/Pelicula';


@Component({
  selector: 'app-rentar-peliculas',
  templateUrl: './rentar-peliculas.component.html',
  styleUrls: ['./rentar-peliculas.component.scss']
})
export class RentarPeliculasComponent implements OnInit {
  private Pelicula : Pelicula;
  Codigo = new FormControl('', [Validators.required]);
  ListaPeliculas = [];
  Opcion = 0;
  constructor(private PeliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.LlenarListas();
  }

  Alquilar(){
    this.PeliculaService.RentarPelicula({Pelicula:this.Pelicula, CodigoUsuario:this.Codigo.value}).subscribe(
      res=>{
        alert("Alguilado Correctamente");
      },
      err=>{
        alert("Error al Alguilar")
      }
    )

  }
  OpcionRentar(Pelicula:Pelicula){
      this.Pelicula = Pelicula;
      this.Opcion = 1;
  }

  LlenarListas(){
    this.GetPeliculas();
  }

  GetPeliculas(){

    this.PeliculaService.GetPeliculasPublicas().subscribe(
      res=>{
          this.ListaPeliculas = res;
      },
      err=>{
        this.ListaPeliculas = [];
      }
    )

  }
}
