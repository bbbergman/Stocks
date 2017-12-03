import {Injectable, OnInit} from "@angular/core";
import { Http, Response} from '@angular/http';
import {Stock} from "./stock.model";

@Injectable()
export class ApiServiceService   {
  public stock: Stock = new Stock();

  constructor(private http: Http) {
  }

  getStockInfo(url: string, stock: Stock): Promise<any> {
    const that = this;
    return this.http
      .get(url)
      .toPromise()
      .then((res) => {
        const body = res.json();
        stock.stockSymbol = body['Meta Data']['2. Symbol'];
        stock.lastRefresh =  body['Meta Data']['3. Last Refreshed'];
        stock.currentValue = body['Time Series (60min)'][stock.lastRefresh]['4. close'];
        stock.history = body['Time Series (60min)'];
        let i = 0;
        for (const key in stock.history)  {
          i++;
          const value = stock.history[key]['4. close'];
          stock.sixHours.push(value);
          ///stock.historyMap.set(key, value);
          if (i === 6) break;
        }
        return stock;
      })
      .catch(this.handleError);
  }

  getStockTrend(url: string, stock: Stock): Promise<any> {
    const that = this;
    return this.http
      .get(url)
      .toPromise()
      .then((res) => {
        const body = res.json();
        stock.trend = body['Time Series (Daily)'];
        let i = 0;
        for (const key in stock.trend)  {
          i++;
          const value = stock.trend[key]['4. close'];
          stock.dailyTrend.push(value);
          ///stock.historyMap.set(key, value);
          if (i === 2) break;
        }
        return stock;
      })
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
