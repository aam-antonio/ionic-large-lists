import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../services/items.service';
import {Group} from '../../item';

@Component({
  selector: 'app-virtual-list',
  templateUrl: './virtual-list.page.html',
  styleUrls: ['./virtual-list.page.scss'],
})
export class VirtualListPage implements OnInit {
  items: Group[];

  constructor(public itemsService: ItemsService) {
  }

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }

}
