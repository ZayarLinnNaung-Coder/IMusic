import { Injectable } from '@angular/core';
import { NewMusicService } from './new-music-service';

@Injectable({
  providedIn: 'root'
})
export class MusicQueueService {

  queueMusic: any[] = []
  
  constructor(
    private musicService: NewMusicService
  ) {
    this.musicService.getAllFavMusics().subscribe((musics: any) => {
      this.queueMusic = musics
      console.log("MUSIC QUEUE SERVICE IS LOADED")
      console.log(this.queueMusic)
      console.log("*****************************")
    })
  }

}