import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './servicios/auth.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent  {
  public appPages = [
    {
      title: 'Buscar',
      url: '/search',
      icon: 'ios-search'
    },
    {
      title: 'Perfil',
      url: "['/editar-teacher-profile', profile.id]",
      icon: 'contact'
    },
    {
      title: 'Conversaciones',
      url: '/chat',
      icon: 'ios-chatbubbles'
    },
	{
      title: 'FAQ',
      url: '/faq',
      icon: 'ios-chatbubbles'
    }
  ];
  todoId = null;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authservice: AuthService
  ) {
    this.initializeApp();
  }

  Onlogout(){
    this.authservice.logout();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
