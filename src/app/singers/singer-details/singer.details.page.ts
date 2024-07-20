import { Component } from '@angular/core';
import { NewMusicService } from 'src/app/service/new-music-service';
import { TimSort } from 'src/app/utils/TimSort';

@Component({
  selector: 'app-search-song',
  templateUrl: 'singer.details.page.html',
  styleUrls: ['singer.details.page.scss'],
})
export class SingerDetailsPage {

  singer: any;
  musicList: any[] = []

  constructor(private musicService: NewMusicService) {

    this.singer = JSON.parse(localStorage.getItem('SINGER') as string)
    this.musicService.getAllMusics(this.singer.id).subscribe((response: any) => {
      this.musicList = response
      new TimSort().timsort(this.musicList, 'title')
    })
  }

}
