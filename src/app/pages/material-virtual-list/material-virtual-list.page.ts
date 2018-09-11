import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../services/items.service';
import {Group} from '../../item';

@Component({
  selector: 'app-material-virtual-list',
  templateUrl: './material-virtual-list.page.html',
  styleUrls: ['./material-virtual-list.page.scss'],
})
export class MaterialVirtualListPage implements OnInit {

  items: Group[];

  constructor(public itemsService: ItemsService) {
  }

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }

}
