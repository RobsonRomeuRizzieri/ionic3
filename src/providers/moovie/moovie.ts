import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";
  private api_key = "069cc1717a75d2af925e91349d8f6a97";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesMovies(){
    return this.http.get(this.baseApiPath + "/movie/latest?api_key=" + this.api_key);
  }

  
  getPopularMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.api_key);
  }
}
