import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {CounterModule} from "./counter/counter/counter.module";
import {HeroesModule} from "./heroes/heroes.component";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
