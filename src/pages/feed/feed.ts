import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public nome_usuario:string = "Robson Rizzieri";
  public objeto_feed = {
    titulo: "Robson Romeu Rizzieri",
    data: "Outubro 5, 1983",
    descricao: "Estou usuando um app increvel...",
    qntd_likes: 150,
    qntd_comments: 4,
    data_coment: "11h ago"
  }

  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private movieProvider: MoovieProvider) {

  }

  public somaDoisNumeros(num1:number, num2:number): void{
    //alert("Minha função funcionou");
    alert(num1 + num2);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage, Executa ao carregar a página');
    //this.somaDoisNumeros(5,20);
    this.movieProvider.getPopularMovies().subscribe(
      data => {        
        const response = (data as any);           
        //alguns exemplos dizem para fazer assim
        //const objeto_retorno = JSON.parse(response._body);        
        //console.log(objeto_retorno);
        //this.lista_filmes = objeto_retorno.results;
        
        //mas o que funcionou foi assim
        //console.log(response.results);
        this.lista_filmes = response.results;
        
      }, error => {
        console.log(error);
      }
    )
  }

}
