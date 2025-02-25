// Feito por Marcos Henrique Alves de Oliveira

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css'],
})
export class FrasesComponent implements OnChanges {
  @Input() mostrarMensagem: boolean = false;

  fraseAleatoria: string = '';

  frases: string[] = [
    'O sucesso é a soma de pequenos esforços repetidos diariamente.',
    'A persistência é o caminho do êxito.',
    'Nunca é tarde para ser quem você poderia ter sido.',
    'Acredite em você e tudo será possível.',
    'Grandes mudanças começam com pequenos passos.',
    'O fracasso é a oportunidade de começar de novo com mais inteligência.',
    'A única maneira de fazer um ótimo trabalho é amar o que você faz.',
    'Seja a mudança que você deseja ver no mundo.',
    'A jornada de mil milhas começa com um único passo.',
    'A sorte favorece os que se preparam.',
  ];

  exibirFraseAleatoria(): void {
    const indice = Math.floor(Math.random() * this.frases.length);
    this.fraseAleatoria = this.frases[indice];
  }

  ocultarOuExibirFrase(): void {
    if (this.mostrarMensagem) {
      this.exibirFraseAleatoria();
    } else {
      this.fraseAleatoria = '';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mostrarMensagem']) {
      this.ocultarOuExibirFrase();
    }
  }

  ngOnInit(): void {
    this.ocultarOuExibirFrase();
  }
}
