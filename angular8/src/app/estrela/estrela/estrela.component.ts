import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-estrela',
  templateUrl: './estrela.component.html',
  styleUrls: ['./estrela.component.css']
})
export class EstrelaComponent implements OnChanges {

  @Input()
  avaliacao:number = 0;

  estrelas:number;

  ngOnChanges(): void {
   this.estrelas = this.avaliacao * 74 / 5;
    
  }

 
  ngOnInit() {
  }

}
