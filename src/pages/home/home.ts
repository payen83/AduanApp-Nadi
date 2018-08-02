import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AduanProvider } from '../../providers/aduan/aduan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  aduanList: Array<any>;
  tempList: Array<any>;
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public aduan: AduanProvider) {
  }

  doRefresh(refresher){
    this.ionViewDidEnter();

    setTimeout(() => {
      refresher.complete();
    }, 2000);

  }

  ionViewDidEnter(){
    let loader = this.loadingCtrl.create({
      content: "Sila tunggu...",
      spinner: 'cresent',
      duration: 3000
    })

    loader.present();

    this.aduan.getAllAduan().then(response => {
      console.log(response);
      let result: any = response;
      this.aduanList = result.feedData;
      
      this.tempList = this.aduanList;
      this.initializeItems();

      loader.dismiss();
    }, err => {
      console.log(err);
      loader.dismiss();
    });
  }

  convertDate(time){
    return new Date(Number(time)*1000).toDateString();
  }

  pageDetail(aduan){
    this.navCtrl.push('DetailPage', {item: aduan});
  }

  initializeItems(){
    this.aduanList = this.tempList;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.aduanList = this.aduanList.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
