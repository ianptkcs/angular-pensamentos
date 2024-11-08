import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css',
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo3',
  };

  tamanhoPensamento(): string {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-';
    }
    return 'pensamento-p';
  }
}
