import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavSongPage } from './fav-song.page';

const routes: Routes = [
  {
    path: '',
    component: FavSongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavSongRoutingModule {}
