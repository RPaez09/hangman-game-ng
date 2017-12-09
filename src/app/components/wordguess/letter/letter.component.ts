import { Input , Component } from '@angular/core';

@Component({
    selector : 'app-letter',
    templateUrl : './letter.component.html'
})

export class LetterComponent {
    @Input() chosenLetter: string; 
}