import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/core/utils/utils';
import { GlobalComponent } from '../../global-component';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.scss']
})
export class BorrowComponent implements OnInit {
  authorized: any | undefined;
  items = [1]

  ngOnInit(): void {
    this.authorized = GlobalComponent.loggedIn;
    Utils.loaders.hideFullLoader();
  }

}
