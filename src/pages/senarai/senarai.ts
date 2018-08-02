import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SenaraiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-senarai',
  templateUrl: 'senarai.html',
})
export class SenaraiPage {

  users: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.users = [
      {
        name: 'Ali bin Abu', 
        company: 'Maybank', 
        icNo: '832201-01-0993', 
        imageURL: 'http://www.rff.org/files/profile_pictures/Leard_5x7.jpg'
      },
      {
        name: 'Soo Woan Chin', 
        company: 'CIMB', 
        icNo: '832240-01-5544', 
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kojo_Baffoe_profile_picture.jpg/220px-Kojo_Baffoe_profile_picture.jpg'
      },
      {
        name: 'Raihan Osman',
        company: 'RHB', 
        icNo: '832201-01-3210', 
        imageURL: 'https://content-static.upwork.com/blog/uploads/sites/3/2015/04/29170635/VickyPhan_Headshot1-300x300.jpg'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SenaraiPage');
  }

}
