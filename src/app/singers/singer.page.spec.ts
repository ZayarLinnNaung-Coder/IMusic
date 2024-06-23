import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingerPage } from './singer.page';

describe('HomePage', () => {
  let component: SingerPage;
  let fixture: ComponentFixture<SingerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingerPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
