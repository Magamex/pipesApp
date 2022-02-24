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
  clientes: string[] = ['Maria','Pedro','Cata'];

  clientesMapa = {
    '=0': 'No hay clientes esperando',
    '=1': 'Tenemos 1 cliente esperando',
    '=2': 'Tenemos 2 clientes esperando',
    'other': 'Tenemos # clientes esperando'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
