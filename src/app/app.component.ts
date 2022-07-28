import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'currencyPipe';
  currency: string = 'EUR';
  sum: number = 20052510.665;
}
