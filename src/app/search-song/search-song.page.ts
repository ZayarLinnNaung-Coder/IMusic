import { Component } from '@angular/core';
import { ArtistService } from '../service/artist.service';
import { MusicService } from '../service/music.service';
import { NewMusicService } from '../service/new-music-service';
import { TimSort } from '../utils/TimSort';

@Component({
  selector: 'app-search-song',
  templateUrl: 'search-song.page.html',
  styleUrls: ['search-song.page.scss'],
})
export class SearchSongPage {

  artists: any[] = []
  musics: any[] = []

  filterArtists: any[] = []
  filterMusics: any[] = []

  constructor(private artistService: ArtistService, private musicService: NewMusicService) {

    this.artistService.getAllArtists().subscribe((response : any) => {
      this.artists = response
      this.filterArtists = response
      new TimSort().timsort(this.artists, 'name')
    })

    this.musicService.getAllMusics().subscribe((response : any) => {
      this.musics = response
      this.filterMusics = response
      new TimSort().timsort(this.musics, 'title')
    })

  }

  search(value: string) {

    this.filterArtists = []
    this.filterMusics = []

    for(let i = 0; i < this.artists.length; i++){

      if (this.artists[i].name.toLowerCase().includes(value.toLowerCase())) {
        this.filterArtists.push(this.artists[i])
      }
    }

    for(let i = 0; i < this.musics.length; i++){

      if (this.musics[i].title.toLowerCase().includes(value.toLowerCase())) {
        this.filterMusics.push(this.musics[i])
      }
    }
  }

}
