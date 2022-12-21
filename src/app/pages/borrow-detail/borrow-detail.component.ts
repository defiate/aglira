import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/core/utils/utils';
import { GlobalComponent } from '../../global-component';

@Component({
  selector: 'app-borrow-detail',
  templateUrl: './borrow-detail.component.html',
  styleUrls: ['./borrow-detail.component.scss']
})
export class BorrowDetailComponent implements OnInit {
  authorized: any | undefined;
  ngOnInit(): void {
    this.authorized = GlobalComponent.loggedIn;
    Utils.loaders.hideFullLoader();
  }

}
