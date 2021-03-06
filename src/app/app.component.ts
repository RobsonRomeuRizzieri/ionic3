import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';
import { ConfigProvider } from '../providers/config/config';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  //rootPage:any = TabsPage;
  //Determina qual a pagina vai ser aberto primeiro
  //Trocamos para a brir introdução e não a tabs page
  rootPage:any = IntroPage;

  constructor(
      platform: Platform, 
      statusBar: StatusBar, 
      splashScreen: SplashScreen,
      configProvider: ConfigProvider
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      let config = configProvider.getConfigData();
      //Se for nulo é a primeira vez que está abrindo 
      if (config == null) {
        //Como é a primeira vez seta a página de introdução
        this.rootPage = IntroPage;
        configProvider.setConfigData(false);
      }else{
        //Se não têm dado informado seta a tabsPage
        this.rootPage = TabsPage
      }
      console.log(config);

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
