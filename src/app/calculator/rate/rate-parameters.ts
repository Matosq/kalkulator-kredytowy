import { CreditParameterDatepicker, CreditParameterInputField } from "../models/credit-parameter.model"

export class RateParameters {
  public readonly rateInputField: CreditParameterInputField = {
    fieldTitle: { title: 'nowa wartość oprocentowania' },
    value: 0,
    stepValue: 0.1,
    label: '%'
  }
  public readonly datePicker: CreditParameterDatepicker = {
    fieldTitle: { title: 'data zmiany' },
    label: 'miesiąc i rok'
  }
  public readonly monthsInputField: CreditParameterInputField = {
    fieldTitle: { title: 'okres zmiany oprocentowania' },
    value: 0,
    stepValue: 1,
    label: 'liczba miesięcy'
  }
}
