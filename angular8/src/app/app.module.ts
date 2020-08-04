import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoListaComponent } from './cursos/curso-lista/curso-lista.component';
import { EstrelaComponent } from './estrela/estrela/estrela.component';
import { ReplacePipe } from './pipe/replace.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CursoListaComponent,
    EstrelaComponent,
    ReplacePipe
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
