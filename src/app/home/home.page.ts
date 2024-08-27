import { Component } from '@angular/core';
import { NewMusicService } from '../service/new-music-service';
import { ArtistService } from '../service/artist.service';
import { TimSort } from '../utils/TimSort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  musics: any[] = []
  favMusics: any[] = []
  artists: any[] = []

  constructor(
    private newMusicService: NewMusicService,
    private artistService: ArtistService,
    private router: Router
  ) {
    this.fetchMusics()
    this.fetchFavMusics()
    this.fetchArtists()
  }

  ionViewWillEnter(){

    this.fetchMusics()
    this.fetchFavMusics()
    this.fetchArtists()
    
  }

  fetchMusics(){
    this.newMusicService.getAllMusics().subscribe((resposne: any) => {
      this.musics = resposne
      new TimSort().timsort(this.musics, 'title')
    })
  }

  fetchFavMusics(){
    this.newMusicService.getAllFavMusics().subscribe((resposne: any) => {
      this.favMusics = resposne
      new TimSort().timsort(this.musics, 'title')
    })
  }



  fetchArtists(){
    this.artistService.getAllArtists().subscribe((response: any) => {
      this.artists = response
      new TimSort().timsort(this.artists, 'name')
    })
  }

  playMusic(music: any) {
    this.newMusicService.changeCurrentMusic(music)
  }

  routeToSingerDetails(singer: any) {
    localStorage.setItem('SINGER', JSON.stringify(singer));
    this.router.navigate([`singers/${singer.id}`])
  }

}
