import { Component, OnInit } from '@angular/core';
import { Chart } from "../../../node_modules/chart.js";
import { UpdateService } from '../services/update.service.js';
import { interval } from 'rxjs';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  labels = [];
  dataSetLocalNew = [];
  constructor(private updateService: UpdateService) { }

  ngOnInit(): void {
    // //in 10 seconds do something
    // interval(10000).subscribe(x => {
    //   this.labels = [];
    //   this.dataSetLocalNew = [];
    //   this.UpdateChart();
    // });

    this.UpdateChart();
  }

  UpdateChart(){
    this.updateService.getLastNRecods(10)
    .subscribe(data => {
      data.forEach(element => {
        console.log(element);

        this.labels.push(element.update_date_time);
        this.dataSetLocalNew.push(element.local_new_cases);
        
        var chart = new Chart("myChart", {
          // The type of chart we want to create
          type: 'line',
      
          // The data for our dataset
          data: {
              labels: this.labels,
              datasets: [{
                  label: 'Covid Cases',
                  backgroundColor: '#900C3F',
                  borderColor: '#FFC300',
                  data: this.dataSetLocalNew
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
}
