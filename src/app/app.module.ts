import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {CounterModule} from "./counter/counter/counter.module";
import {HeroesModule} from "./heroes/heroes.component";
import {DbzModule} from "./dbz/dbz.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
