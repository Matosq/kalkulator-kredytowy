import { Injectable } from '@angular/core';
import { MonthsPeriodIndexes } from '../models/date.model';
import { RatePosition } from '../models/rate.model';
import { RateService } from '../rate/rate.service';
import { DatePeriodIndexerService } from './date-period-indexer.service';

export type RateData = RatePosition & MonthsPeriodIndexes;
@Injectable({
  providedIn: 'root'
})
export class RatesDataService {
  private rates: RatePosition[] = [];
  private ratesToMonthsMap: Map<number, number> = new Map();
  constructor(
    private rateService: RateService,
    private datePeriodIndexerService: DatePeriodIndexerService
  ) { }

  public calculateRates(): void {
    this.rates = this.rateService.getRates();
    this.ratesToMonthsMap.clear();
    this.rates.forEach((rate: RatePosition) => {
      const { startMonth, endMonth } = this.datePeriodIndexerService.translateDateToIndexOfMonths(rate.date, rate.numberOfMonths)
      if (!!startMonth && !!endMonth) {
        for (let i = startMonth; i <= endMonth; i++) {
          this.ratesToMonthsMap.set(i, rate.value / 100);
        }
      }
    });
  }

  public getRateValueByMonthIndex(monthsIndex: number): number | undefined {
    return this.ratesToMonthsMap.get(monthsIndex);
  }
}
