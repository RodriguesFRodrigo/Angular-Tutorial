import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'curso-angular';
  name: String = "Joel";
  game = {
    name: "The Last Of US Part I",
    year: 2013
  }
}
