import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaterialVirtualListPage } from './material-virtual-list.page';
import {MatExpansionModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: MaterialVirtualListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatExpansionModule
  ],
  declarations: [MaterialVirtualListPage]
})
export class MaterialVirtualListPageModule {}
