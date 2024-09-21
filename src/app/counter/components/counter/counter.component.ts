import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  //Parte del html
  template: `

  <h3>counter: {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent{
  public title: string = 'Hola mundo';
  public counter: number = 10;

  increaseBy = (value: number): void => {
    this.counter += value;
  }

  reset = () => {
    this.counter = 10;
  }
}
