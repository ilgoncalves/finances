import React from 'react';
import { useRecoilValue } from 'recoil';
import { RecurringExpensesTotal } from '../../../recoil/atoms';

const Summary = () => {
  const RecurringExpenses = useRecoilValue(RecurringExpensesTotal)
  return (
    <div className="summary-container py-5">
      <h6>Recurring Expenses: R$ {RecurringExpenses}</h6>
    </div>
  )
}

export { Summary }
