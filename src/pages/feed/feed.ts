import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';
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
  public loader;
  public refreshing;
  public isRefreshing: Boolean = false;
  public page = 1; 
  public infiniteScroll;

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
    private movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController) {

  }

  // Sempre que der refreshe na pagina deslisando ela para baixo
  doRefresh(refresher){
    this.refreshing = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }    

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde um momento..."
    });
    this.loader.present();
  }

  fecharCarregando() {
    this.loader.dismiss();
  }

  carregarFilmes(newPage: boolean = false){
    console.log('ionViewDidLoad FeedPage, Executa ao carregar a página');
    this.abreCarregando();

    this.movieProvider.getPopularMovies(this.page).subscribe(
      data => {        
        const response = (data as any);           
        //alguns exemplos dizem para fazer assim
        //const objeto_retorno = JSON.parse(response._body);        
        //console.log(objeto_retorno);
        //this.lista_filmes = objeto_retorno.results;
        
        //mas o que funcionou foi assim
        //console.log(response.results);
        if (newPage){
          this.lista_filmes = this.lista_filmes.concat(response.results);
          this.infiniteScroll.complete();
        } else {
          this.lista_filmes = response.results;
        }
        
        this.fecharCarregando();
        if (this.refreshing) {
          this.refreshing.complete();
          this.isRefreshing = false;
        }
      }, error => {
        console.log(error);
        this.fecharCarregando();
        if (this.refreshing) {
          this.refreshing.complete();
          this.isRefreshing = false;
        }        
      }
    )
  }

  public abrirDetalhes(filme: any){    
    this.navCtrl.push(FilmeDetalhesPage, {id: filme.id});
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    //alert("Minha função funcionou");
    alert(num1 + num2);
    
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);    
  }  

  //Sempre que entrar na pagina
  ionViewDidEnter() {
    this.carregarFilmes();
  }

}
