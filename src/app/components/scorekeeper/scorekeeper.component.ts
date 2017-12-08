import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scorekeeper',
  templateUrl: './scorekeeper.component.html'
})
export class ScorekeeperComponent {
    @Input() playerWins: number;
}
