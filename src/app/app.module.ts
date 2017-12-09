import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ScorekeeperComponent } from './components/scorekeeper/scorekeeper.component';
import { WordGuessComponent } from './components/wordguess/wordguess.component';

@NgModule({
  declarations: [
    AppComponent,
    ScorekeeperComponent,
    WordGuessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
