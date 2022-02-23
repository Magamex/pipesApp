import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 2512405.5242;
  porcentaje: number = 0.2598;

  constructor() { }

  ngOnInit(): void {
  }


}
