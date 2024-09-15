import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {NativeAudio} from '@capacitor-community/native-audio'
import { NewMusicService } from '../service/new-music-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-music-player',
  templateUrl: 'music-player.html',
  styleUrls: ['music-player.scss'],
})
export class MusicPlayer implements OnInit, OnDestroy{

  @Input() showMusicPlayer: boolean = false;
  isPlaying: boolean = false;

  queueMusic: any[] = []
  currentMusic: any;

  isPreloaded: boolean = false

  private musicChangeSubscription!: Subscription;

  constructor(private musicService: NewMusicService) {

    this.musicService.getAllFavMusics().subscribe((musics: any) => {
      this.queueMusic = musics
      if(this.queueMusic.length > 0){
        this.currentMusic = this.queueMusic[0]
        console.log(this.currentMusic)
      }
    })

  }

  ngOnInit() {
    this.musicChangeSubscription = this.musicService.changeMusic$.subscribe((music: any) => {
      this.showMusicPlayer = true
      this.changeCurrentMusic(music);
    });
  }

  ngOnDestroy() {
    if (this.musicChangeSubscription) {
      this.musicChangeSubscription.unsubscribe();
    }
  }

  async preloadAudio() {
    try {

      await NativeAudio.preload({
        assetPath: this.currentMusic?.url,
        assetId: 'uniqueId1',
        audioChannelNum: 1,
        isUrl: true
      });

      this.isPreloaded = true;
    } catch (error) {
      console.error('Error preloading audio', error);
    }
  }

  async playAudio() {

    this.isPlaying = true

    this.preloadAudio();
    try {
      await NativeAudio.play({
        assetId: 'uniqueId1',
        time: 0
      });
    } catch (error) {
      console.error('Error playing audio', error);
    }
  }

  async changeCurrentMusic(music: any){

    this.pauseAudio()
    this.currentMusic = music;

  }

  async pauseAudio() {
    this.isPlaying = false
    try {

      if(this.isPreloaded){
        console.log("unloading....")
        await NativeAudio.unload({
          assetId: 'uniqueId1'
        });
      }

      await NativeAudio.stop({
        assetId: 'uniqueId1'
      });

    } catch (error) {
      console.error('Error playing audio', error);
    }
  }

  nextAudio() {

    this.pauseAudio()

    let currentIndex = this.queueMusic.findIndex(m => m.id == this.currentMusic.id)
    let nextIndex = currentIndex + 1;

    if(nextIndex >= this.queueMusic.length){
      nextIndex = 0;
    }

    this.currentMusic = this.queueMusic.at(nextIndex)
  }

  previousAudio() {

    this.pauseAudio()

  }

}
