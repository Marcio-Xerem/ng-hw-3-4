import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-boas-vindas',
  imports: [],
  templateUrl: './boas-vindas.component.html',
  styleUrl: './boas-vindas.component.css'
})
export class BoasVindasComponent {
  nomeUsuario = signal('Step Computer');

  setNomeUsuario(){
    let vnome = document.getElementById('nome_usuario') as HTMLInputElement;
    this.nomeUsuario.set(vnome.value);
    }
}

