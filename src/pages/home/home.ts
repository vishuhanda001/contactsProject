import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

progress:number = 0;
@ViewChild('barCanvas1') barCanvas1;
@ViewChild('barCanvas2') barCanvas2;
barChart: any;

  constructor(public navCtrl: NavController) {
 setInterval(()=>{
        this.progress++;
        if(this.progress>=100){
          // clearInterval(d);
          this.progress = 0;
        }
      },100); 
  }



  ionViewDidLoad() {

           this.barChart = new Chart(this.barCanvas1.nativeElement, {
                  
               type: 'bar',
               data: {
                 showLines:true,
                   labels: ["2010", "2011", "2012", "2013", "2014"],
                   datasets: [{
                       label: 'FinanceY Stats',
                       data: [23,26,30,29,31,34],
                       backgroundColor: [
                           'rgba(34, 94, 163, 0.8)',
                           'rgba(34, 94, 163, 0.8)',
                           'rgba(34, 94, 163, 0.8)',
                           'rgba(34, 94, 163, 0.8)',
                           'rgba(34, 94, 163, 0.2)',
                       ],
                       borderColor: [
                           'rgba(255,99,132,1)',
                           'rgba(54, 162, 235, 1)',
                           'rgba(255, 206, 86, 1)',
                           'rgba(75, 192, 192, 1)',
                           'rgba(153, 102, 255, 1)',
                       ],
                       borderWidth: 1
                   }]
               },
               options: {
                   scales: {
                       yAxes: [{
                           ticks: {
                              //  beginAtZero:true
                           },
                           gridLines: {
                            offsetGridLines: true
                        }
                       }]
                   }
               }
    
           });



           this.barChart = new Chart(this.barCanvas2.nativeElement, {
            
         type: 'line',
         data: {
           showLines:true,
             labels: ["2010", "2011", "2012", "2013", "2014"],
             datasets: [{
                 label: 'Server Stats',
                 data: [23,26,30,29,31,34],
                 backgroundColor: [
                     'rgba(255, 153, 153, 0.8)',
                     'rgba(255, 153, 153, 0.8)',
                     'rgba(255, 153, 153, 0.8)',
                     'rgba(255, 153, 153, 0.8)',
                     'rgba(255, 153, 153, 0.2)',
                 ],
                 borderColor: [
                     'rgba(255,99,132,1)',
                     'rgba(54, 162, 235, 1)',
                     'rgba(255, 206, 86, 1)',
                     'rgba(75, 192, 192, 1)',
                     'rgba(153, 102, 255, 1)',
                 ],
                 borderWidth: 1
             }]
         },
         options: {
             scales: {
                 yAxes: [{
                     ticks: {
                        //  beginAtZero:true
                     },
                     gridLines: {
                      offsetGridLines: true,
                    
                  }
                 }]
             }
         }

     });



    
   }




}
