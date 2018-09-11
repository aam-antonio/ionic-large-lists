import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'normal-list', loadChildren: './pages/normal-list/normal-list.module#NormalListPageModule' },
  { path: 'virtual-list', loadChildren: './pages/virtual-list/virtual-list.module#VirtualListPageModule' },
  { path: 'material-list', loadChildren: './pages/material-list/material-list.module#MaterialListPageModule' },
  { path: 'material-virtual-list', loadChildren: './pages/material-virtual-list/material-virtual-list.module#MaterialVirtualListPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
