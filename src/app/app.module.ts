import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ScorekeeperComponent } from './components/scorekeeper/scorekeeper.component';

@NgModule({
  declarations: [
    AppComponent,
    ScorekeeperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
