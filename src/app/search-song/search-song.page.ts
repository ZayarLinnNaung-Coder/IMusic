import { Component } from '@angular/core';
import { ArtistService } from '../service/artist.service';
import { MusicService } from '../service/music.service';
import { NewMusicService } from '../service/new-music-service';
import { TimSort } from '../utils/TimSort';
import { MusicCategoryService } from '../service/music-category.service';

@Component({
  selector: 'app-search-song',
  templateUrl: 'search-song.page.html',
  styleUrls: ['search-song.page.scss'],
})
export class SearchSongPage {

  artists: any[] = []
  musics: any[] = []
  musicCategories: any[] = []

  filterArtists: any[] = []
  filterMusics: any[] = []

  constructor(
    private artistService: ArtistService, 
    private musicService: NewMusicService,
    private musicCategoryService: MusicCategoryService) {

  }

  ionViewWillEnter(){

    this.artistService.getAllArtists().subscribe((response : any) => {
      this.artists = response
      this.filterArtists = response
      new TimSort().timsort(this.artists, 'name')
    })

    this.musicService.getAllMusics().subscribe((response : any) => {
      this.musics = response
      this.filterMusics = response
      console.log(this.musics)
      new TimSort().timsort(this.musics, 'title')
    })

    this.musicCategoryService.getAllMusicCategories().subscribe((cat: any) => {
      this.musicCategories = cat
    })
    
  }

  toogleMusicFavourite(musicId: string, isFav: boolean) {
    this.musicService.makeMusicFavourite(musicId, !isFav).subscribe(result => {
      this.musics.filter(m => m.id == musicId).at(0).favorite = !isFav
    });
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


  playMusic(music: any) {
    this.musicService.changeCurrentMusic(music)
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