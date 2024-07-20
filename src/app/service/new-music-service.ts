import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstants } from '../constants/UrlConstants';

@Injectable({
  providedIn: 'root'
})
export class NewMusicService {

  constructor(private http: HttpClient) { }

  getAllMusics(singerId: string = ''){

    let url = `${UrlConstants.BASE_URL}/musics`
    if(singerId != ''){
      url += `?artistId=${singerId}`
    }
    return this.http.get(url);
  }

  getMusicById(id: string){
    const url = `${UrlConstants.BASE_URL}/musics/${id}`
    return this.http.get(url);
  }

  addNewMusicCategory(music: any){
    const url = `${UrlConstants.BASE_URL}/musics`
    console.log(music)
    return this.http.post(url, music);
  }
}
