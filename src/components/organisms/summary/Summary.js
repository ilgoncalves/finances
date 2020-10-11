import React from 'react';
import { useRecoilValue } from 'recoil';
import { RecurringExpensesTotal, EarningsTotal } from '../../../recoil/selectors';

const Summary = () => {
  const Earnings = useRecoilValue(EarningsTotal);
  const RecurringExpenses = useRecoilValue(RecurringExpensesTotal);

  return (
    <div className="summary-container py-5">
      <h6>Earnings: R$ {Earnings}</h6>
      <h6>Recurring Expenses: R$ {RecurringExpenses}</h6>
    </div>
  )
}

export { Summary }
