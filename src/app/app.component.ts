import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BiscoitoComponent } from './biscoito/biscoito.component';

@Component({
  selector: 'app-root',
  imports: [BiscoitoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pw3-biscoito';
}
