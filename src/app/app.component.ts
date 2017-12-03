import {Component, OnInit} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import {ApiServiceService} from "./ApiService.service";
import {Stock} from "./stock.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  stocksUrls = [{name: 'S&P 500', apiUrl: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=INX&interval=60min&apikey=E8FB4Y5IPA2IGHT1',
    apiUrl2: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=INX&apikey=E8FB4Y5IPA2IGHT1'},
    {name: 'Dow 30' , apiUrl: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DJI&interval=60min&apikey=E8FB4Y5IPA2IGHT1',
      apiUrl2: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DJI&apikey=E8FB4Y5IPA2IGHT1'},
    {name: 'Nasdaq' , apiUrl: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IXIC&interval=60min&apikey=E8FB4Y5IPA2IGHT1',
      apiUrl2: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IXIC&apikey=E8FB4Y5IPA2IGHT1'},
    {name: 'Amazon.com' , apiUrl: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AMZN&interval=60min&apikey=E8FB4Y5IPA2IGHT1',
      apiUrl2: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMZN&apikey=E8FB4Y5IPA2IGHT1'},
    {name: 'Alphabet Inc' , apiUrl: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOGL&interval=60min&apikey=E8FB4Y5IPA2IGHT1',
      apiUrl2: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOGL&apikey=E8FB4Y5IPA2IGHT1'}
    ];
}
