import { NgModule } from '@angular/core';
import {PreloadAllModules, RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {SearchSongModule} from "./search-song/search-song.module";
import {IonicModule, IonicRouteStrategy} from "@ionic/angular";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search-song/search-song.module').then( m => m.SearchSongModule)
  },
  {
    path: 'fav',
    loadChildren: () => import('./fav-song/fav-song.module').then( m => m.FavSongModule)
  },
  {
    path: 'singers',
    loadChildren: () => import('./singers/singer-song.module').then( m => m.SingerSongModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    IonicModule.forRoot({
      animated: false
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
