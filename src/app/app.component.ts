import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mock-api';
  showForm = false;
  showList = true;

  onNewPerson() {
    this.showList = false;
    this.showForm = true;
  }

  onPersonAdded() {
    this.showList = true;
    this.showForm = false;
  }
}
