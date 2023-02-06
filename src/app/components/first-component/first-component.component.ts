import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: String = "Joel";
  age: Number = 47;
  job = "Actor";

  constructor() {

  }
}
