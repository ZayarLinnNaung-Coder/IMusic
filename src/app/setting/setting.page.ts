import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MusicCategoryService } from '../service/music-category.service';
import { ArtistService } from '../service/artist.service';
import { MusicService } from '../service/music.service';
import { NewMusicService } from '../service/new-music-service';
import { LoadingController } from '@ionic/angular/providers/loading-controller';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-fav-song',
  templateUrl: 'setting.page.html',
  styleUrls: ['setting.page.scss'],
})
export class SettingPage implements OnInit{

  showLoading: boolean = false;

  newMusicCategoryName: string = ''
  newArtistName: string = ''
  artistBackgroundImage: string = ''

  musicTitle: string = ''
  selectedCategoryId: string = ''
  selectedArtistId: string = ''
  musicUrl: string = ''
  musicBackgroundImage: string = ''

  musicCategories: any[] = []
  artists: any[] = []

  constructor(
    private musicCategoryService: MusicCategoryService,
    private artistService: ArtistService,
    private musicService: MusicService,
    private newMusicService: NewMusicService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.featchAllArtists();
    this.featchAllMusicCategories();
  }

  featchAllMusicCategories(){
    this.musicCategoryService.getAllMusicCategories().subscribe((response: any) => {
      this.musicCategories = response
    })
  }

  featchAllArtists(){
    this.artistService.getAllArtists().subscribe((response: any) => {
      this.artists = response
    })
  }

  addNewMusicCategory() {
    const newCategory = {name: this.newMusicCategoryName};
    this.musicCategoryService.addNewMusicCategory(newCategory).subscribe(response => {
      this.featchAllMusicCategories()
      this.newMusicCategoryName = ''
    })
  }

  uploadNewMusic() {
    const music = {
      title: this.musicTitle,
      imageUrl: this.musicBackgroundImage,
      url: this.musicUrl,
      musicCategoryId: this.selectedCategoryId,
      musicArtistId: this.selectedArtistId 
    };

    this.newMusicService.addNewMusicCategory(music).subscribe(response => {
      console.log(response)
      this.router.navigate(['']);
    })
  }

  onUploadArtistImage(event: any) {
    
    const file: File = event.target.files[0];
    if(file){
      this.musicService.uploadFile(file).subscribe(response => {
        this.artistBackgroundImage = response
        console.log(response)
      }, err => {
        console.error(err)
      })
    }
  }

  uploadMusicBackground(event: any) {

    this.showLoading = true;
    const file: File = event.target.files[0];
    if(file){
      this.musicService.uploadFile(file).subscribe(response => {
        this.musicBackgroundImage = response
        this.showLoading = false
      }, err => {
        console.error(err)
      })
    }

  }

  uploadMusic(event: any) {
    this.showLoading = true;
    const file: File = event.target.files[0];
    if(file){
      this.musicService.uploadFile(file).subscribe(response => {
        this.musicUrl = response
        this.showLoading = false;
      }, err => {
        console.error(err)
      })
    }

  }

  addNewArtist() {
    
    const newArtist = {
      name: this.newArtistName,
      image: this.artistBackgroundImage
    }

    this.artistService.addNewArtists(newArtist).subscribe(response => {
      this.featchAllArtists()
    })

  }

}