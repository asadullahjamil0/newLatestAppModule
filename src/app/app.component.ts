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
  displayVal: string = '';
  getData(val: any) {
    console.warn(val);
    this.displayVal = val;
  }

  count = 0;

  counter(type: string) {

    type === 'add' ? this.count++ : this.count--;
  }

}

