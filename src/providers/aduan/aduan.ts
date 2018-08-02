import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AduanProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AduanProvider {
  baseURL: string = 'http://localhost:8888/helpdesk/api/';
  constructor(public http: HttpClient, public alertCtrl: AlertController) {
    console.log('Hello AduanProvider Provider');
  }

  getAllAduan(){
    let url: string = this.baseURL + 'getAduanAll';

    return new Promise((resolve, reject) => {
      this.http.get(url)
      .subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      })

    });
  }

  doLogin(user){
    let url: string = this.baseURL + 'login';
    //convert to string format
    let body = JSON.stringify(user);

    //call http post request
    return new Promise((resolve, reject) => {
      this.http.post(url, body)
      .subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      })

    });
  }

  createAduan(aduan){
    let userData = JSON.parse(localStorage.getItem('USER'));
    
    let aduanData = {
      user_id: userData.user_id,
      token: userData.token,
      title: aduan.title,
      kategori: aduan.kategori,
      masalah: aduan.masalah
    };

    let url: string = this.baseURL + 'createAduan';
    // let body = 'user_id=' + userData.user_id;
    // body += '&token=' + userData.token;
    // body += '&title=' + aduan.title;
    // body += '&kategori=' + aduan.kategori;
    // body += '&masalah=' + aduan.masalah;

    let body = JSON.stringify(aduanData);
    //call http post request

    return new Promise((resolve, reject) => {
      this.http.post(url, body)
      .subscribe(res => {
        console.log(res);
        resolve(res);
      }, error => {
        console.log(error);
        reject(error);
      })
    });
  }

  showAlert(title, message){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    })
    alert.present();
  }



}
