import { Component } from '@angular/core';
import { PerfilAdminComponent } from './perfil-admin/perfil-admin.component';

@Component({
  selector: 'app-root',
  imports: [PerfilAdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exemplo1';
}
