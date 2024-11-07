import { Component } from '@angular/core';
import { ConnectableObservable, last } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newLatestAppModule';
  getName() {
    alert("Function called!");
  }
  getName_1(name: any, lastName: any) {
    alert(name + lastName);
  }
  getData(val: any) {
    console.log(val);
  }
}
