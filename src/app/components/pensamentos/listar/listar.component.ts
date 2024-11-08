import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { NgFor, NgIf } from '@angular/common';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [RouterLink, PensamentoComponent, NgFor, NgIf],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css',
})
export class ListarComponent {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentosAPI) => {
      this.listaPensamentos = listaPensamentosAPI;
    });
  }
}
