import { Injectable } from '@angular/core';
import { Curso } from '../modelos/curso';


@Injectable({
    providedIn: 'root'
})

export class CourseService {

    todosCursos(): Curso[] {
        return CURSOS;
    }

    buscarPorId(id: number): Curso {
        return CURSOS.find((c: Curso) => c.id == id);
    }
    salvarEatualizar(curso:Curso){
        if(curso.id){
            const index = CURSOS.findIndex((c:Curso)=> c.id == curso.id);
            CURSOS[index] = curso;
        }else{
            CURSOS.push(curso); 
        }
    }
}

var CURSOS: Curso[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        dataCriacao: 'November 2, 2019',
        descricao: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duracao: 120,
        code: 'XLF-1212',
        avaliacao: 2.8,
        preco: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        dataCriacao: 'November 4, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duracao: 80,
        code: 'DWQ-3412',
        avaliacao: 3.5,
        preco: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        dataCriacao: 'November 8, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duracao: 80,
        code: 'QPL-0913',
        avaliacao: 4.0,
        preco: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        dataCriacao: 'November 16, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duracao: 80,
        code: 'OHP-1095',
        avaliacao: 4.5,
        preco: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        dataCriacao: 'November 25, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duracao: 80,
        code: 'PWY-9381',
        avaliacao: 5,
        preco: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];