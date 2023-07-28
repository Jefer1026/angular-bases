import {NgModule} from "@angular/core";
import {CounterComponent} from "./components/counter/counter.component";
import {NgIf} from "@angular/common";

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    NgIf
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule{

}
