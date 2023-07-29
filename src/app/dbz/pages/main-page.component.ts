import {Component, OnInit} from '@angular/core';
import {Character} from "../interfaces/character.interface";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[]=[{
    name: 'krilin',
    power: 200
  },{
    name:'Goku',
    power:10000
  }];

}
