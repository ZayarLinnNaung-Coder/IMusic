import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingerPage } from './singer.page';
import {SingerDetailsPage} from "./singer-details/singer.details.page";

const routes: Routes = [
  {
    path: '',
    component: SingerPage
  },
  {
    path: ':id',
    component: SingerDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingerRoutingModule {}
