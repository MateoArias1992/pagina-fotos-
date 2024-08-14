import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaFotosComponent } from './lista-fotos/lista-fotos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaFotosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pagina_fotos';
}
