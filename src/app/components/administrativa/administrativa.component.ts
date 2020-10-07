import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PeliculaService } from "../../services/pelicula.service";
import { Pelicula } from "../../Models/Pelicula";

@Component({
  selector: 'app-administrativa',
  templateUrl: './administrativa.component.html',
  styleUrls: ['./administrativa.component.scss']
})
export class AdministrativaComponent implements OnInit {

  private passPatternNumber: any = /^[0-9]$/
  Nombre = new FormControl('', [Validators.required]);
  Cubierta = new FormControl('', [Validators.required]);
  Descripcion = new FormControl('', [Validators.required]);
  Puntaje = new FormControl('', [Validators.required,Validators.pattern(this.passPatternNumber)]);
  idEstadoPelicula = new FormControl('', [Validators.required]);
  EstadosPelicula = [];
  ListaPeliculas = [];
  Opcion = 0;

  private Pelicula: Pelicula;


  constructor(private PeliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.LlenarListas();
    this.GetPeliculas();
  }


  LlenarListas() {
    this.ListarEstados();
  }
  ListarEstados() {
    this.PeliculaService.GetEstadosPeliculas().subscribe(
      res => {
        this.EstadosPelicula = res;
      },
      err => {
        this.EstadosPelicula = [];
      }
    )
  }
  CrearPelicula() {

    this.Nombre.markAsTouched();
    this.Cubierta.markAsTouched();
    this.Descripcion.markAsTouched();
    this.Puntaje.markAsTouched();
    this.idEstadoPelicula.markAsTouched();


    if (this.Nombre.valid && this.Cubierta.valid && this.Descripcion.valid && this.Puntaje.valid && this.idEstadoPelicula.valid) {

      this.Pelicula = {
        idPelicula: null,
        Nombre: this.Nombre.value,
        Cubierta: this.Cubierta.value,
        Descripcion: this.Descripcion.value,
        Puntaje: this.Puntaje.value,
        idEstadoPelicula: this.idEstadoPelicula.value,
        FechaCreacion: new Date(),
        FechaModificacion: new Date()

      }
      this.PeliculaService.CreatePeliculas(this.Pelicula).subscribe(
        res => {
          alert(res.Mensaje);
          this.GetPeliculas();
          this.Opcion = 2;
        },
        err => {
          alert("Error al crear la pelicula");
        }
      );
    }



  }
  ActualziarPelicula() {
    this.Nombre.markAsTouched();
    this.Cubierta.markAsTouched();
    this.Descripcion.markAsTouched();
    this.Puntaje.markAsTouched();
    this.idEstadoPelicula.markAsTouched();


    if (this.Nombre.valid && this.Cubierta.valid && this.Descripcion.valid && this.Puntaje.valid && this.idEstadoPelicula.valid) {

      this.Pelicula = {
        idPelicula: this.Pelicula.idPelicula,
        Nombre: this.Nombre.value,
        Cubierta: this.Cubierta.value,
        Descripcion: this.Descripcion.value,
        Puntaje: this.Puntaje.value,
        idEstadoPelicula: this.idEstadoPelicula.value,
        FechaCreacion: null,
        FechaModificacion: new Date()

      }
      this.PeliculaService.UpdatePeliculas(this.Pelicula).subscribe(
        res => {
          alert(res.Mensaje);
          this.GetPeliculas();
          this.Opcion = 2;
        },
        err => {
          alert("Error al crear la pelicula");
        }
      );
    }
  }
  EliminarPelicula() {

    this.PeliculaService.DeletePeliculas(this.Pelicula).subscribe(
      res => {
        alert(res.Mensaje);
        this.GetPeliculas();
        this.Opcion = 2;
      },
      err => {
        alert("Error al crear la pelicula");
      }
    );


  }
  GetPeliculas() {

    this.PeliculaService.GetPeliculas().subscribe(
      res => {
        this.ListaPeliculas = res;
      },
      err => {
        this.ListaPeliculas = [];
      }
    )

  }
  RellenarEditar(Pelicula: Pelicula) {

    this.Nombre.setValue(Pelicula.Nombre);
    this.Cubierta.setValue(Pelicula.Cubierta);
    this.Descripcion.setValue(Pelicula.Descripcion);
    this.Puntaje.setValue(Pelicula.Puntaje);
    this.idEstadoPelicula.setValue(Pelicula.idEstadoPelicula);
    this.Pelicula = Pelicula;
    this.Opcion = 3;


  }
  RellenarEliminar(Pelicula: Pelicula) {

    this.Pelicula = Pelicula;
    this.Opcion = 4;

  }

  getErrorMessagePuntaje() {
    if (this.Puntaje.hasError('required')) {
      return 'Ingrese un puntaje';
    } else if (this.Puntaje.errors.pattern) {
      return 'El Puntaje solo acepta numeros del 1 al 9';
    }

  }


}
