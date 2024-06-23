import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SingerPage } from './singer.page';

import { SingerRoutingModule } from './singer-routing.module';
import {SingerDetailsPage} from "./singer-details/singer.details.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingerRoutingModule
  ],
  declarations: [SingerPage, SingerDetailsPage]
})
export class SingerSongModule {}
