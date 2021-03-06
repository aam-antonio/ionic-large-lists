import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../services/items.service';
import {Group} from '../../item';
import {collapse} from '../../collapse.animation';

@Component({
  selector: 'app-normal-list',
  templateUrl: './normal-list.page.html',
  styleUrls: ['./normal-list.page.scss'],
  animations: [
    collapse
  ]
})
export class NormalListPage implements OnInit {
  items: Group[];

  constructor(public itemsService: ItemsService) {
  }

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }

}
