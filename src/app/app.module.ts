import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoListaComponent } from './cursos/curso-lista/curso-lista.component';
import { EstrelaComponent } from './estrela/estrela/estrela.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { Erro404Component } from './componentes/erro404/erro404.component';
import { CursoInfoComponent } from './cursos/curso-info/curso-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CursoListaComponent,
    EstrelaComponent,
    ReplacePipe,
    NavBarComponent,
    Erro404Component,
    CursoInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
