import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-lira';

  menuItems = [
    { title: 'Home', route: '' },
    { title: 'Borrow', route: '/borrow' }
  ]
}
