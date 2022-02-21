import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombreLower: string = 'ditto';
  nombreUpper: string = 'DITTO';
  nombreCompleto: string = 'PeRRiTo DiTtO';

}
