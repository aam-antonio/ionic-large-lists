import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaterialListPage } from './material-list.page';
import {MatExpansionModule, MatTreeModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: MaterialListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    MatTreeModule
  ],
  declarations: [MaterialListPage]
})
export class MaterialListPageModule {}
