import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchSongPage } from './search-song.page';

const routes: Routes = [
  {
    path: '',
    component: SearchSongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
