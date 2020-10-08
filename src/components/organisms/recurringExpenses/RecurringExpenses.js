import React, { useState, useEffect } from 'react';
import '../../../App.css';
import { Card } from '../../molecules';
import { useRecoilState } from 'recoil';
import { RecurringExpensesTotal } from '../../../recoil/atoms';

const RecurringExpenses = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: 'Rent',
      cost: 650.00,
      due_date: '15'
    }, {
      id: 2,
      name: 'Rent',
      cost: 650.00,
      due_date: '15'
    }, {
      id: 3,
      name: 'Rent',
      cost: 650.00,
      due_date: '15'
    }
  ]);
  const [total, setTotal] = useRecoilState(RecurringExpensesTotal)

  useEffect(() => {
    let total = 0;
    for (let index = 0; index < expenses.length; index++) {
      total += expenses[index].cost;
    }
    setTotal(total);
  }, [expenses])

  const renderExpenses = () => {
    return expenses.map(expense => <tr key={expense.id}>
      <td>{expense.name}</td>
      <td>R$ {expense.cost}</td>
      <td>{expense.due_date}</td>
    </tr>)
  }


  return (
    <Card title={"Recurring Expenses"}>
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
        <div>
          <p>Total: {total}</p>
        </div>
      </div>
    </Card>
  )
}

export { RecurringExpenses }
