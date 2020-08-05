import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListaComponent } from './cursos/curso-lista/curso-lista.component';
import { Erro404Component } from './componentes/erro404/erro404.component';
import { CursoInfoComponent } from './cursos/curso-info/curso-info.component';


const routes: Routes = [
  {
    path: 'cursos', component: CursoListaComponent
  },
  {
    path: '', redirectTo: 'cursos', pathMatch: 'full'
  },
  {
    path:'curso/:id',component: CursoInfoComponent
  },
  {
    path:'**',component: Erro404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
