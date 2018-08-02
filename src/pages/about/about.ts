import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AduanProvider } from '../../providers/aduan/aduan';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  aduan: {
    title: string, 
    kategori: string,
    masalah: string
  }

  constructor(public aduanP: AduanProvider, public navCtrl: NavController) {
    this.aduan = {
      title: null, 
      kategori: null,
      masalah: null
    }
  }

  saveAduan(){
    this.aduanP.createAduan(this.aduan).then(res => {
      let result: any = res;
      if(result.feedData){
        //show message success
        this.aduanP.showAlert('Aduan', 'Maklumat Disimpan');

        this.aduan = {
          title: null, 
          kategori: null,
          masalah: null
        }
      }
    }, err => {
      console.log(err)
      this.aduanP.showAlert('Error', JSON.stringify(err));
    })
  }


}
