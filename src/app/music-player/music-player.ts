import { Component, Input } from '@angular/core';
import {NativeAudio} from '@capacitor-community/native-audio'

@Component({
  selector: 'app-music-player',
  templateUrl: 'music-player.html',
  styleUrls: ['music-player.scss'],
})
export class MusicPlayer{
  
  @Input() showMusicPlayer: boolean = false;
  isPlaying: boolean = false;

  constructor() {
    this.preloadAudio();
  }

  async preloadAudio() {
    try {
      console.log("Pre loading")
      await NativeAudio.preload({
        assetPath: 'https://firebasestorage.googleapis.com/v0/b/imusic-001.appspot.com/o/music%2FHarsh%20Likhari%20-%20Bebe%20Bapu%20_%20Vagish%20_%20Harf%20Kambo%20(Official%20Video)%20(128).mp3?alt=media&token=032f1326-f5ee-4df7-8a2a-f3b04a886166',
        assetId: 'uniqueId1',
        audioChannelNum: 1,
        isUrl: true
      });
    } catch (error) {
      console.error('Error preloading audio', error);
    }
  }

  async playAudio() {
    this.isPlaying = true
    try {
      await NativeAudio.play({
        assetId: 'uniqueId1',
        time: 0
      });
    } catch (error) {
      console.error('Error playing audio', error);
    }
  }

  async pauseAudio() {
    this.isPlaying = false
    try {
      await NativeAudio.pause({
        assetId: 'uniqueId1'
      });
    } catch (error) {
      console.error('Error playing audio', error);
    }
  }

}