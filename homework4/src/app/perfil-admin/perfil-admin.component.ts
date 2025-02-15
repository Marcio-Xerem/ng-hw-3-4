import { Component } from '@angular/core';
import { ListaCidadesComponent } from '../lista-cidades/lista-cidades.component';

@Component({
  selector: 'app-perfil-admin',
  imports: [ListaCidadesComponent],
  templateUrl: './perfil-admin.component.html',
  styleUrl: './perfil-admin.component.css'
})
export class PerfilAdminComponent {
  ehAdmin = true;
}