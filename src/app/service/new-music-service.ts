import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstants } from '../constants/UrlConstants';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewMusicService {

  private changeMusicSubject = new Subject<any>();
  changeMusic$ = this.changeMusicSubject.asObservable();

  constructor(private http: HttpClient) { }

  changeCurrentMusic(music: any) {
    this.changeMusicSubject.next(music);
  }

  getAllMusics(singerId: string = ''){

    let url = `${UrlConstants.BASE_URL}/musics`
    if(singerId != ''){
      url += `?artistId=${singerId}`
    }
    return this.http.get(url);
  }

  getAllFavMusics(){

    let url = `${UrlConstants.BASE_URL}/musics/fav`
    return this.http.get(url);
  }

  getMusicById(id: string){
    const url = `${UrlConstants.BASE_URL}/musics/${id}`
    return this.http.get(url);
  }

  addNewMusicCategory(music: any){
    const url = `${UrlConstants.BASE_URL}/musics`
    return this.http.post(url, music);
  }

  makeMusicFavourite(musicId: string, favourite: boolean){  
    const url = `${UrlConstants.BASE_URL}/musics/fav/${musicId}`
    return this.http.post(url, {favorite: favourite});
  }


}
