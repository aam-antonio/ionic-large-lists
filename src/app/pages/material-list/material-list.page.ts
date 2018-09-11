import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../services/items.service';
import {Group} from '../../item';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.page.html',
  styleUrls: ['./material-list.page.scss'],
})
export class MaterialListPage implements OnInit {

  items: Group[];

  constructor(public itemsService: ItemsService) {
  }

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }

}
