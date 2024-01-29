import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
//import { ScreenOrientation } from '@capacitor/screen-orientation';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit {
  count = 0;
  constructor() {
    //ScreenOrientation.lock();
  }

  async openSite() {
    await Browser.open({ url: 'http://capacitorjs.com/' });
  }

  async openAndCloseSite() {
    await Browser.open({ url: 'http://capacitorjs.com/' });
    setTimeout(() => {
      Browser.close();
    }, 3000);
    setTimeout(async () => {
      try {
        await Browser.close();
      } catch (err) {
        alert(err);
      }
    }, 6000);
  }

  ngOnInit(): void {
    Browser.addListener('browserFinished', () => {
      this.count++;
    });
  }
}
