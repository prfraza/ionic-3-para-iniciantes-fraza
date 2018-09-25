import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
    public objeto_feed = {
    titulo:"Paulo Frazão",
    data:" Setembro 17, 1972",
    descricao:"Estou fazendo um App incrível...",
    qtd_likes: 17,
    qtd_coments: 4,
    time_coment: "21h ago"
    }

  public nome_usuario:string = "Paulo Frazão do código";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public somaDoisNumeros(num1:number, num2:number): void{
    //alert(num1 + num2);
  }
  ionViewDidLoad() {
    //this.somaDoisNumeros(10,7);
  }
}