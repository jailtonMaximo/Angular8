import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/modelos/curso';
import { CourseService } from 'src/app/servico/curso.service';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListaComponent implements OnInit {
  _cursos: Curso[] = [];
  cursoFiltrados: Curso[]= [];
  _filtrarPor:String;
  constructor(private cursoService:CourseService) { }

  ngOnInit(): void {
    this._cursos = this.cursoService.todosCursos();
    this.cursoFiltrados = this._cursos;
  }
  set filtro(valor:String){
    this._filtrarPor = valor;
    this.cursoFiltrados = this._cursos.filter((curso : Curso) => curso.name.toLocaleLowerCase().indexOf(this._filtrarPor.toLocaleLowerCase()) > -1);
  }
  get filtro(){
    return this._filtrarPor;
  }

}
