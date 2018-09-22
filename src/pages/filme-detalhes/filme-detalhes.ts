import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
})
export class FilmeDetalhesPage {

  public filme;
  public filmeid;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmeDetalhesPage');
  }

  // Sempre que entrar na pagina vai ser executada
  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");
    console.log("filme id recebido:", this.filmeid);
  }

}
