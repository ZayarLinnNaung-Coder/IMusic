import { Component } from '@angular/core';
import { NewMusicService } from '../service/new-music-service';
import { MusicCategoryService } from '../service/music-category.service';
import { TimSort } from '../utils/TimSort';

@Component({
  selector: 'app-fav-song',
  templateUrl: 'fav-song.page.html',
  styleUrls: ['fav-song.page.scss'],
})
export class FavSongPage {

  playMusic(music: any) {
    this.musicService.changeCurrentMusic(music)
  }

  musics: any[] = []
  musicCategories: any[] = []

  filterMusics: any[] = []

  constructor(
    private musicService: NewMusicService,
    private musicCategoryService: MusicCategoryService) {

  }

  ionViewWillEnter(){

    this.musicService.getAllFavMusics().subscribe((response : any) => {
      this.musics = response
      this.filterMusics = response
      console.log(this.filterMusics)
      new TimSort().timsort(this.musics, 'title')
    })

    this.musicCategoryService.getAllMusicCategories().subscribe((cat: any) => {
      this.musicCategories = cat
    })

  }

  search(value: string) {

    this.filterMusics = []
    
    for(let i = 0; i < this.musics.length; i++){

      if (this.musics[i].title.toLowerCase().includes(value.toLowerCase())) {
        this.filterMusics.push(this.musics[i])
      }
    }
  }

  filterByCategory(categoryId: string, event: any) {
    document.querySelectorAll('.categoryTag').forEach(c => {
      c.classList.remove('active')
    })

    event.target.classList.add('active')

    console.log(this.musics)
    if(categoryId == 'all'){
      this.filterMusics = this.musics
    } else{

      this.filterMusics = []
      for(let i = 0; i < this.musics.length; i++){
        console.log(this.musics[i].musicCategory.id)
        if(this.musics[i].musicCategory.id == categoryId){
          this.filterMusics.push(this.musics[i])
        }
      }
    }

  } 
  
}
