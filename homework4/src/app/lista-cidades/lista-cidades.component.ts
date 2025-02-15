import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-cidades',
  imports: [],
  templateUrl: './lista-cidades.component.html',
  styleUrl: './lista-cidades.component.css'
})
export class ListaCidadesComponent {
  arrListaCidades = ['Rio de Janeiro', 'Maragogi', 'Fortaleza', 'Porto', 'NovaIorque', 'Cotonou', 'Luanda', 'Porto Príncipe'];
}
