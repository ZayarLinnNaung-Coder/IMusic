import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstants } from '../constants/UrlConstants';

@Injectable({
  providedIn: 'root'
})
export class MusicCategoryService {

  constructor(private http: HttpClient) { }

  getAllMusicCategories(){
    const url = `${UrlConstants.BASE_URL}/music-categories`
    return this.http.get(url);
  }

  addNewMusicCategory(musicCategory: any){
    const url = `${UrlConstants.BASE_URL}/music-categories`
    console.log(musicCategory)
    return this.http.post(url, musicCategory);
  }
}
