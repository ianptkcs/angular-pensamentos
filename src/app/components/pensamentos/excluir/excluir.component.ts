import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css',
})
export class ExcluirComponent {
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(id)).subscribe((pensamentoAPI) => {
      this.pensamento = pensamentoAPI;
    });
  }

  excluir() {
    this.pensamento.id &&
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listar']);
      });
  }

  cancelar() {
    this.router.navigate(['/listar']);
  }
}
