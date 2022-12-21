import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/core/utils/utils';
import { GlobalComponent } from '../../global-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  authorized: any | undefined;

  ngOnInit(): void {
    this.authorized = GlobalComponent.loggedIn;
    Utils.loaders.hideFullLoader();
  }

}
