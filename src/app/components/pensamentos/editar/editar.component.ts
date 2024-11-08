import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(id)).subscribe((pensamentoAPI) => {
      this.pensamento = pensamentoAPI;
    });
  }

  editar() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar']);
    });
  }

  cancelar() {
    this.router.navigate(['/listar']);
  }
}
