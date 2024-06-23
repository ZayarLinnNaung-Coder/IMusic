import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FavSongPage } from './fav-song.page';
import {FavSongRoutingModule} from "./fav-song-routing.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavSongRoutingModule
  ],
  declarations: [FavSongPage]
})
export class FavSongModule {}
