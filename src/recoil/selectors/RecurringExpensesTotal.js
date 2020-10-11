import { selector } from 'recoil';
import { RecurringExpensesState } from '../atoms';

export const RecurringExpensesTotal = selector({
  key: 'RecurringExpensesTotal',
  get: ({get}) => {
    const recurringExpenses = get(RecurringExpensesState);

    let total = 0;
    for (let index = 0; index < recurringExpenses.length; index++) {
      total += parseFloat(recurringExpenses[index].cost);
    }
    return total;

  }
});