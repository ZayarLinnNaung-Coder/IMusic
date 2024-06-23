import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SettingPage } from './setting.page';
import {SettingRoutingModule} from "./setting-routing.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingRoutingModule
  ],
  declarations: [SettingPage]
})
export class SettingModule {}
