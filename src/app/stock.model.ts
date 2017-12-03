export class Stock {
  public stockName: string ;
  public stockSymbol: string;
  public lastRefresh: string;
  public currentValue: string;
  public history: any[] = [];
  public trend: any[] = [];
  public dailyTrend: number[] = [];
  public sixHours: number[] = [];
}
