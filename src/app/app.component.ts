import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipesApp';

  nombre: string = 'matias';

  mostrarNombre(){
    console.log(this.nombre);
  }
}
