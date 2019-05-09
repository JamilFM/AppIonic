import { Items } from './listagem-categorias';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';

export interface Items {
  Categorias:string;
}

@IonicPage()
@Component({
  selector: 'page-listagem-categorias',
  templateUrl: 'listagem-categorias.html',
})

export class ListagemCategoriasPage {
items = {} as Items
arrayItems:any[] = [];

  constructor(public navCtrl: NavController, private afs: AngularFireDatabase, public navParams: NavParams) {

    this.afs
      .list("Categorias")
      .snapshotChanges()
      .subscribe((data)=>{
        data.map((item)=>{
          console.log(item.payload.val() as Items);
          this.arrayItems.push(item.payload.val() as Items);
          console.log(this.arrayItems)
        })
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListagemCategoriasPage');

  }
  getItems(ev:any) {
    
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.arrayItems = this.arrayItems.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  itemSelected(Items: string) {
    console.log("Selected Item", Items);
  }
}


