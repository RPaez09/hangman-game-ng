import { Input , Component , OnInit } from '@angular/core';


@Component({
    selector : 'app-wordguess',
    templateUrl : './wordguess.component.html'
})

export class WordGuessComponent {
    @Input() wordArray: string[];
 }