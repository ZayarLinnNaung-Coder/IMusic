import { Component } from '@angular/core';
import { ArtistService } from '../service/artist.service';
import { Router } from '@angular/router';
import { TimSort } from '../utils/TimSort';

@Component({
  selector: 'app-search-song',
  templateUrl: 'singer.page.html',
  styleUrls: ['singer.page.scss'],
})
export class SingerPage {

  artists: any[] = []
  filterArtists: any[] = []

  constructor(private artistService: ArtistService, private router: Router) {

    this.artistService.getAllArtists().subscribe((resposne: any) => {

      new TimSort().timsort(resposne, 'name')

      this.artists = resposne
      this.filterArtists = resposne
    })

  }
  search(value: string) {

    this.filterArtists = []

    for(let i = 0; i < this.artists.length; i++){

      if (this.artists[i].name.toLowerCase().includes(value.toLowerCase())) {
        this.filterArtists.push(this.artists[i])
      }
    }
  }

  routeToSingerDetails(singer: any) {
    localStorage.setItem('SINGER', JSON.stringify(singer));
    this.router.navigate([`singers/${singer.id}`])
  }

}
