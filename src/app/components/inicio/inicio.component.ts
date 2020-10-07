import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private Router : Router) { }

  ngOnInit(): void {
  }


  Publica(){
    this.Router.navigateByUrl('/Publica');
  }

  Administratica(){

    this.Router.navigateByUrl('/Administracion');
  }

  Alquilar(){

    this.Router.navigateByUrl('/RentarPelicula');
  }

  
}
