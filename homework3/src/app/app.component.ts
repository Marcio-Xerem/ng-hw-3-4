import { Component } from '@angular/core';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';

@Component({
  selector: 'app-root',
  imports: [BoasVindasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Homework 3';
}
