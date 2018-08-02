import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AduanProvider } from '../../providers/aduan/aduan';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: {username: string, password: string};
  constructor(public navCtrl: NavController, public navParams: NavParams, public aduan: AduanProvider) {
    this.user = {username: null, password: null};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.aduan.doLogin(this.user).then(response => {
      let result: any = response;
      if(result.userData){
        localStorage.setItem('USER', JSON.stringify(result.userData));
        this.navCtrl.setRoot(TabsPage, {}, {animate: true});
      } else {
        console.log(result.error);
      }
    }, err => {});
  }

}
