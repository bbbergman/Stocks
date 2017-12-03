import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { AppComponent } from './app.component';
import {ApiServiceService} from "./ApiService.service";
import { StocksComponent } from './stocks/stocks.component';
declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartModule,
  ],
  providers: [AppComponent, ApiServiceService, { provide: HighchartsStatic,
  useFactory: highchartsFactory}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
