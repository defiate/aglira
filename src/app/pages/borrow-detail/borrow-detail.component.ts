import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-borrow-detail',
  templateUrl: './borrow-detail.component.html',
  styleUrls: ['./borrow-detail.component.scss']
})
export class BorrowDetailComponent implements OnInit {
  ngOnInit(): void {
    Utils.loaders.hideFullLoader();
  }

}
