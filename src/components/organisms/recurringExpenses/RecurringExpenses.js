import React, { useState, useEffect } from 'react';
import { Card } from '../../molecules';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { RecurringExpensesTotal, RecurringExpensesState } from '../../../recoil/atoms';
import { ADD_RECURRING_EXPENSE_BUTTON_ID } from '../../../utils';
import { FirebaseService } from '../../../services';

const RecurringExpenses = ({clickAdd}) => {
  const [expenses, setExpenses] = useRecoilState(RecurringExpensesState);
  const setTotal = useSetRecoilState(RecurringExpensesTotal)

  useEffect(() => {
    let total = 0;
    for (let index = 0; index < expenses.length; index++) {
      total += parseFloat(expenses[index].cost);
    }
    setTotal(total);
  }, [expenses, setTotal])

  useEffect(() => {
    FirebaseService.getDataList('recurring_expenses', setExpenses);
  }, [setTotal])

  const renderExpenses = () => {
    return expenses.map(expense => <tr key={expense.key}>
      <td>{expense.name}</td>
      <td>R$ {expense.cost}</td>
      <td>{expense.due_date}</td>
    </tr>)
  }


  return (
    <Card title={"Recurring Expenses"} icon={"recurring"} floatingButton onClickFloating={clickAdd} floatingButtonId={ADD_RECURRING_EXPENSE_BUTTON_ID}>
      <div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Cost</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {renderExpenses()}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}

export { RecurringExpenses }
