import { Component, OnInit } from '@angular/core';
import { PeliculaService } from "../../services/pelicula.service";
import { Pelicula } from "../../Models/Pelicula";
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-publica',
  templateUrl: './publica.component.html',
  styleUrls: ['./publica.component.scss']
})
export class PublicaComponent implements OnInit {
  Nombre = new FormControl('', [Validators.required]);
  ListaPeliculas  = [];
  Opcion = 1;

  constructor(private PeliculaService: PeliculaService) { }

  ngOnInit(): void {

    this.LlenarListas();

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


  GetPeliculaPorNombre(){
    this.PeliculaService.GetPeliculasPorNombre({Nombre:this.Nombre.value}).subscribe(
      res=>{
        this.ListaPeliculas = res;
      },
      err=>{
        this.ListaPeliculas = [];
      }
    )
  }

  OrganizarPorPuntaje(){
   this.ListaPeliculas.sort(((a, b) => b.Puntaje - a.Puntaje));
  }

}
