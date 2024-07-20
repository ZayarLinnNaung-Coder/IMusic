import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SettingPage } from './setting.page';
import {SettingRoutingModule} from "./setting-routing.module";
import { LoadingScreenPage } from '../loading-screen/loading-screen.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingRoutingModule
  ],
  declarations: [SettingPage, LoadingScreenPage]
})
export class SettingModule {}
