import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.scss']
})
export class BorrowComponent implements OnInit {

  items = [1, 2, 3]

  ngOnInit(): void {
    Utils.loaders.hideFullLoader();
  }

}
