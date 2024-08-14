import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from '../servicios/consumo-api.service';
import { CommonModule } from '@angular/common';
import { Foto } from '../modelos/fotos';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-lista-fotos',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule], // Importa NgxPaginationModule aquí
  templateUrl: './lista-fotos.component.html',
  styleUrls: ['./lista-fotos.component.css'],
})
export class ListaFotosComponent implements OnInit {
  fotos: Foto[] = []; // Arreglo para almacenar las fotos obtenidas de la API
  p: number = 1; // Variable para la página actual

  constructor(private servicioApi: ConsumoApiService) {}

  ngOnInit(): void {
    this.getListadoFotos(); // Llama al método para obtener las fotos cuando se inicializa el componente
  }

  getListadoFotos() {
    this.servicioApi.getListadoFotos().subscribe((datos: Foto[]) => {
      this.fotos = datos; // Asigna los datos recibidos al arreglo de fotos
      console.log('fotos recibidas:', this.fotos); // Imprime en consola las fotos recibidas
    });
  }

  pageChanged(page: number) {
    this.p = page; // Actualiza la página actual cuando el usuario cambia de página
  }
}
