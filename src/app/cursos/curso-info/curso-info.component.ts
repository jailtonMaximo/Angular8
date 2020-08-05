import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/modelos/curso';
import { CourseService } from 'src/app/servico/curso.service';

@Component({
  selector: 'app-curso-info',
  templateUrl: './curso-info.component.html',
  styleUrls: ['./curso-info.component.css']
})
export class CursoInfoComponent implements OnInit {
  id:number;
  curso:Curso;
  constructor(private route:ActivatedRoute,private cursoService:CourseService) { }

  ngOnInit() {
   this.id = +this.route.snapshot.paramMap.get('id');
    this.curso = this.cursoService.buscarPorId( this.id);
  }

  salvar():void{
    this.cursoService.salvarEatualizar(this.curso);
  }

}
