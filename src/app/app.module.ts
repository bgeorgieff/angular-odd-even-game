import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OddNumberComponent } from './odd-number/odd-number.component';
import { EvenNumberComponent } from './even-number/even-number.component';
import { GameControlComponent } from './game-control/game-control.component';

@NgModule({
  declarations: [
    AppComponent,
    OddNumberComponent,
    EvenNumberComponent,
    GameControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
