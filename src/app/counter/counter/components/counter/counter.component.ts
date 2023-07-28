import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-counter',
  templateUrl: '../../counter.component.html',
  styleUrls: ['../../counter.component.css']
})
export class CounterComponent {

  public count:number = 10;

  public increment(value:number):void{
    if(this.count!=0||value>0)
    this.count+=value;
  }
  public resetValue():void{
    this.count=10;
  }
}
