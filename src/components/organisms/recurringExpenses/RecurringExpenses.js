import React, { useEffect } from 'react';
import { Card } from '../../molecules';
import { ButtonIcon } from '../../atoms';
import { useRecoilState } from 'recoil';
import { RecurringExpensesState } from '../../../recoil/atoms';
import { ADD_RECURRING_EXPENSE_BUTTON_ID } from '../../../utils';
import { FirebaseService } from '../../../services';

const RecurringExpenses = ({clickAdd}) => {
  const [expenses, setExpenses] = useRecoilState(RecurringExpensesState);

  useEffect(() => {
    FirebaseService.getDataList('recurring_expenses', setExpenses);
  }, [setExpenses])

  const removeExpense = (index) => {
    const auxexpenses = [...expenses];
    const toRemove = auxexpenses.splice(index, 1);
    FirebaseService.remove('recurring_expenses', toRemove[0].key, (erro) => {
      if (!erro) {
        setExpenses(auxexpenses);
      }
    });
  }

  const renderExpenses = () => {
    return expenses.map((expense, index) => <tr key={expense.key}>
      <td>{expense.name}</td>
      <td>R$ {expense.cost}</td>
      <td>{expense.due_date}</td>
      <td>
        <ButtonIcon id={`remove-expense-${expense.key}`} icon="minus" onClick={() => removeExpense(index)}/>
      </td>
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
                <th></th>
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
