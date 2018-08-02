import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { AduanProvider } from '../../providers/aduan/aduan';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild('pieCanvas') pieCanvas;
  pieChart: any;
  constructor(public navCtrl: NavController, public aduanP: AduanProvider) {

  }

  ionViewDidLoad(){
    this.aduanP.getAllAduan().then(res => {
      let data: any = res;
      console.log(data.feedData);

      let countCategory = {
        Kerosakan: 0,
        Bencana: 0,
        Gangguan: 0
      }

      for (let item of data.feedData){
        if(item.kategori == 'Kerosakan'){
          countCategory.Kerosakan += 1
        } else if (item.kategori == 'Bencana'){
          countCategory.Bencana += 1;
        } else if (item.kategori == 'Gangguan') {
          countCategory.Gangguan += 1;
        }
      }
      this.pieChart = new Chart(this.pieCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ['Kerosakan', 'Bencana', 'Gangguan'],
          datasets: [{
            backgroundColor: ['blue', 'red', 'yellow'],
            data: [
                countCategory.Kerosakan, 
                countCategory.Bencana, 
                countCategory.Gangguan
            ],
            hoverBackgroundColor: ['blue', 'red', 'yellow']
          }]
        }
        
      });  
    }, err => {

    })
  }

}
