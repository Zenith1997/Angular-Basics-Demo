import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'line',
    component: LineChartComponent
  },
  {
    path: 'pie',
    component: PieChartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
