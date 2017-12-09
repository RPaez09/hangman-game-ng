import { Input , Component } from '@angular/core';

@Component({
    selector : 'app-wordguess',
    templateUrl : './wordguess.component.html'
})

export class WordGuessComponent {
    @Input() currentWord: string;
 }