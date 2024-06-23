import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavSongPage } from './fav-song.page';

describe('HomePage', () => {
  let component: FavSongPage;
  let fixture: ComponentFixture<FavSongPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavSongPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
