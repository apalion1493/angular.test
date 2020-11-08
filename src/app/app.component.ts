import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputValue = ''

  constructor() {

  }

  onInput(event?: any) {
    this.inputValue = event.target.value
  }

  onClick(): void {
    alert('click')
  }
}
