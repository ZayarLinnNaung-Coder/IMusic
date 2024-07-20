import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstants } from '../constants/UrlConstants';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getAllArtists(){
    const url = `${UrlConstants.BASE_URL}/artists`
    return this.http.get(url);
  }

  addNewArtists(artist: any){
    const url = `${UrlConstants.BASE_URL}/artists`
    return this.http.post(url, artist);
  }

}
