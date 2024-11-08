import { Routes } from '@angular/router';
import { CriarComponent } from './components/pensamentos/criar/criar.component';
import { ListarComponent } from './components/pensamentos/listar/listar.component';
import { ExcluirComponent } from './components/pensamentos/excluir/excluir.component';
import { EditarComponent } from './components/pensamentos/editar/editar.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
  {
    path: 'criar',
    component: CriarComponent,
  },
  {
    path: 'listar',
    component: ListarComponent,
  },
  {
    path: 'pensamentos/excluir/:id',
    component: ExcluirComponent,
  },
  {
    path: 'pensamentos/editar/:id',
    component: EditarComponent,
  },
];
