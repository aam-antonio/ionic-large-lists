import { Injectable } from '@angular/core';
import {Group} from '../item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: Group[];

  constructor() {
    this.items = [];

    for (let i = 0; i < 5; i++) {
      this.items.push({id: i, title: `Group value ${i}`, subgroups: [], show: false});

      for (let j = 0; j < 3; j++) {
        this.items[i].subgroups.push({id: j, title: `Subgroup value ${j}`, items: [], show: false});

        for (let k = 0; k < 1000; k++) {
          this.items[i].subgroups[j].items.push({id: k, title: `Item value ${k}`});
        }
      }
    }
  }

  getItems() {
    return this.items;
  }
}
