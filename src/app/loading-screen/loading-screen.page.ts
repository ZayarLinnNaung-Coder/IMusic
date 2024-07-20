import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: 'loading-screen.page.html',
  styleUrls: ['loading-screen.page.scss'],
})
export class LoadingScreenPage{
  @Input() showLoadingScreen: boolean = false;
}