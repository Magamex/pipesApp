import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  test:string = 'Hola Mundo';
  enMayusculas: boolean = true;

  heroes:Heroe[] = [
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    }
  ]

  ordenarPor:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(orden:string){
    this.ordenarPor = orden;
  }

}
