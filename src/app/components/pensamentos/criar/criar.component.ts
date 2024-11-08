import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './criar.component.html',
  styleUrl: './criar.component.css',
})
export class CriarComponent {
  constructor(private service: PensamentoService, private router: Router) {}

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  salvar() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar']);
    });
  }

  cancelar() {
    this.router.navigate(['/listar']);
  }
}
