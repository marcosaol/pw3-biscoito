import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrasesComponent } from '../frases/frases.component';
import { ImagemComponent } from '../imagem/imagem.component';
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'app-biscoito',
  imports: [FrasesComponent, ImagemComponent, BotaoComponent],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {
  imagemSrc: string = 'biscoito.png';
  biscoitoQuebrado: boolean = false;
  mostrarMensagem: boolean = false

 quebrarBiscoito(){
  this.imagemSrc = 'biscoito-aberto.png'
  this.biscoitoQuebrado = true;
  this.mostrarMensagem = true
 }
 reiniciarBiscoito(){
  this.imagemSrc = 'biscoito.png';
  this.biscoitoQuebrado = false;
  this.mostrarMensagem = false;
 }
}
