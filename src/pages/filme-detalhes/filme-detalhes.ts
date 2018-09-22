import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

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
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public movieProvider: MoovieProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmeDetalhesPage');
  }

  // Sempre que entrar na pagina vai ser executada
  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");    
    this.movieProvider.getMovieDetails(this.filmeid).subscribe(data => {
      //let retorno = (data as any)._body;
      //this.filme = JSON.parse(retorno);
      let retorno = (data as any);      
      this.filme = retorno;
    }, error => {
      console.log(error);
    })
  }

}
