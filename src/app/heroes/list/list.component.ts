import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[]=['Spiderman','Superman','Hulk','Flash','Batman'];
  public heroRemoved?:string;

  removeLastHeroe():void{
      this.heroRemoved=this.heroNames.pop();
  }

}
