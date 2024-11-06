import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  templateUrl: './inline-style.component.html',
  styles: `.inline{color:red} .inline{font-size:40px}`
})
export class InlineStyleComponent {

}
