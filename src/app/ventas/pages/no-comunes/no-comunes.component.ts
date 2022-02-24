import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // I18nSelectPipe
  nombre: string = 'Matias';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  // I18nPluralPipe
  clientes: string[] = ['Maria','Pedro','Cata','Mariano'];

  clientesMapa = {
    '=0': 'No hay clientes esperando',
    '=1': 'Tenemos 1 cliente esperando',
    '=2': 'Tenemos 2 clientes esperando',
    'other': 'Tenemos # clientes esperando'

  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarGenero(){
    if(this.genero === 'masculino'){
      this.genero = 'femenino';
      this.nombre = 'Susana';
    }else{
      this.genero = 'masculino';
      this.nombre = 'Matias';
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //keyvalue pipe
  persona = {
    nombre:'Matias',
    apellido:'Gomez',
    edad:23,
    lugar:'Buenos Aires, Argentina'
  }

}
