import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Hangman Game';
  playerWins: number = 0;

  word = "test";
}
