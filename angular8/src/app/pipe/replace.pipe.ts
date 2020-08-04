import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
        name:'replace'
    })
export class ReplacePipe implements PipeTransform{


    transform(value, char: String, valueToReplace: String) {
       return value.replace(char ,valueToReplace );
    }


}