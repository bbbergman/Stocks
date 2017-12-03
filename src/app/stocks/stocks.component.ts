import {Component, OnInit, Input} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import {ApiServiceService} from "../ApiService.service";
import {Stock} from "../stock.model";

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  @Input() apiUrls: {name: string, apiUrl: string, apiUrl2: string};
  public stock: Stock = new Stock();

  constructor(
    private apiServiceService: ApiServiceService) {
  }
  options: Object;

  ngOnInit() {
    this.apiServiceService.getStockInfo(this.apiUrls.apiUrl, this.stock)
      .then(result => {this.stock = result,  this.stock.stockName = this.apiUrls.name , this.options = {
          title : { text : this.stock.stockName + ' chart' },
          series: [{data: [Number(this.stock.sixHours[5]), Number(this.stock.sixHours[4]), Number(this.stock.sixHours[3]), Number(this.stock.sixHours[2]), Number(this.stock.sixHours[1]), Number(this.stock.sixHours[0])],
          }]
        } ; }
      )
      .catch(error => console.log(error));

    this.apiServiceService.getStockTrend(this.apiUrls.apiUrl2, this.stock)
      .then(result => {this.stock = result, this.calculateTrend(); })
      .catch(error => console.log(error));
  }

  calculateTrend() {
    this.stock.dailyTrend[2] = (this.stock.dailyTrend[0]) - (this.stock.dailyTrend[1]);
    this.stock.dailyTrend[2] = parseFloat((this.stock.dailyTrend[2]).toFixed(2));
    this.stock.dailyTrend[3] = ((this.stock.dailyTrend[0]) - (this.stock.dailyTrend[1])) / (this.stock.dailyTrend[1]) * 100;
    this.stock.dailyTrend[3] = parseFloat(this.stock.dailyTrend[3].toFixed(2));
  }

  getColor() {
   return this.stock.dailyTrend[2] > 0 ? 'green' : 'red';

  }


}
