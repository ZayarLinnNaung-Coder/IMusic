import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingPage } from './setting.page';

describe('HomePage', () => {
  let component: SettingPage;
  let fixture: ComponentFixture<SettingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
