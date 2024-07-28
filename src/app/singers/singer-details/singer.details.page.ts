import { Component } from '@angular/core';
import { MusicCategoryService } from 'src/app/service/music-category.service';
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
  musicCategories: any[] = []

  filterMusics: any[] = []

  constructor(
    private musicService: NewMusicService,
    private musicCategoryService: MusicCategoryService
  ) {

    this.singer = JSON.parse(localStorage.getItem('SINGER') as string)
    this.musicService.getAllMusics(this.singer.id).subscribe((response: any) => {
      this.musicList = response
      new TimSort().timsort(this.musicList, 'title')
      this.filterMusics = this.musicList
    })

    this.musicCategoryService.getAllMusicCategories().subscribe((cat: any) => {
      this.musicCategories = cat
    })
  }

  search(value: string) {

    this.filterMusics = []

    for(let i = 0; i < this.musicList.length; i++){

      if (this.musicList[i].title.toLowerCase().includes(value.toLowerCase())) {
        this.filterMusics.push(this.musicList[i])
      }
    }
  }

  playMusic(music: any) {
    this.musicService.changeCurrentMusic(music)
  }

  toogleMusicFavourite(musicId: string, isFav: boolean) {
    this.musicService.makeMusicFavourite(musicId, !isFav).subscribe(result => {
      this.musicList.filter(m => m.id == musicId).at(0).favorite = !isFav
    });
  }

  filterByCategory(categoryId: string, event: any) {
    document.querySelectorAll('.categoryTag').forEach(c => {
      c.classList.remove('active')
    })

    event.target.classList.add('active')

    if(categoryId == 'all'){
      this.filterMusics = this.musicList
    } else{

      this.filterMusics = []
      for(let i = 0; i < this.musicList.length; i++){
        console.log(this.musicList[i].musicCategory.id)
        if(this.musicList[i].musicCategory.id == categoryId){
          this.filterMusics.push(this.musicList[i])
        }
      }
    }

  } 

}
