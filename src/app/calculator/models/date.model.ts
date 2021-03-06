import { Moment } from "moment";

export interface DateRange {
  startDate: Moment | null;
  endDate: Moment | null;
}

export interface MonthsPeriodIndexes {
  startMonth: number | null,
  endMonth: number | null
}

export interface MonthYearPeriod {
  monthYearPeriod: string,
  monthYearPeriodShortcut: string
}

export interface MonthYear {
  monthYear: string,
  monthYearShortcut: string
}

export const DatepickerFormat = {
  parse: {
    dateInput: 'MMMM YYYY',
  },
  display: {
    dateInput: 'MMMM YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export const DatepickerRangeFormat = {
  parse: {
    dateInput: 'MMM YYYY',
  },
  display: {
    dateInput: 'MMM YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
