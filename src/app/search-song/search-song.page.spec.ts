import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchSongPage } from './search-song.page';

describe('HomePage', () => {
  let component: SearchSongPage;
  let fixture: ComponentFixture<SearchSongPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchSongPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
