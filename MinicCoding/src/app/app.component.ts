import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Daftar Penyakit',
      url: '/daftarpenyakit',
      icon: 'list-box'
    },
    {
      title: 'Tanya Dokter',
      url: '/tanyadokter',
      icon: 'help-circle'
    },
    {
      title:'Undang Teman',
      url: '/undangteman',
      icon:'person-add'
    },
    {
      title:'Favorite',
      url: '/favorite',
      icon:'heart'
    },
    {
      title:'Emergency Call',
      url: '/emergencycall',
      icon:'call'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
