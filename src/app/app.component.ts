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

  name = 'AsaduLLah';
  disable = true;

  getChange() {
    this.disable === true ? this.disable = false : this.disable = true;
  }
  show = false;
  changeCondition() {
    this.show === false ? this.show = true : this.show = false;
  }
  color = 'green';
  changeString() {
    this.color === 'green' ? this.color = 'red' : this.color = 'blue';
  }
  users = ['AsadUllah', 'Bilal', 'husnain', 'umer'];
  userDetails = [
    { name: 'Asadullah', phone: '9023904', email: 'asad@learn.com' },
    { name: 'Bial', phone: '1023941', email: 'bilal@learn.com' },
    { name: 'Husnain', phone: '2723451', email: 'husnain@learn.com' },
    { name: 'Umer', phone: '0923413', email: 'umer@learn.com' },
  ];
  employee = [
    { name: 'Asadullah', phone: '9023904', email: 'peter@learn.com', socialAccounts: ['facebook', 'insta', 'twitter'] },
    { name: 'sam', phone: '6124656', email: 'sam@learn.com', socialAccounts: ['whatsapp', 'twitter', 'insta'] },
    { name: 'megan', phone: '3462366', email: 'megan@learn.com', socialAccounts: ['insta', 'youtube', 'yahoo'] },

  ];

}

