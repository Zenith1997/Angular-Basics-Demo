import { Component, OnInit } from '@angular/core';
import { Chart } from "../../../node_modules/chart.js";
import { UpdateService } from '../services/update.service.js';
import { interval } from 'rxjs';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  labelsPieChart = [];
  dataSetLocalNewPieChart = [];
  constructor(private updateService: UpdateService) { }

  ngOnInit(): void {
    // //in 10 seconds do something
    // interval(10000).subscribe(x => {
    //   this.labelsPieChart = [];
    //   this.dataSetLocalNewPieChart = [];
    //   this.UpdateChart();
    // });

    this.UpdateChart();
  }

  UpdateChart(){
    this.updateService.getLastNRecods(5)
    .subscribe(data => {
      data.forEach(element => {
        console.log(element)
        this.labelsPieChart.push(element.update_date_time);
        this.dataSetLocalNewPieChart.push(element.local_new_cases);
        
        var chart = new Chart("myChart", {
          // The type of chart we want to create
          type: 'pie',
      
          // The data for our dataset
          data: {
              labels: this.labelsPieChart,
              datasets: [{
                  label: 'Covid Deaths',
                  backgroundColor: this.getColors(this.labelsPieChart.length),
                  borderColor: '#FFC300',
                  data: this.dataSetLocalNewPieChart
              }]
          },
      
          // Configuration options go here
          options: {
            responsive:true,
            maintainAspectRatio: false
          }
      });
      });
    }, error => {
      console.error(error);
    });
  }

  getColors(length){
    let pallet = ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];
    let colors = [];

    for(let i = 0; i < length; i++) {
      colors.push(pallet[i % pallet.length]);
    }

    return colors;
  }
}
