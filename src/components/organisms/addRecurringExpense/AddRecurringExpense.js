import React, { useState } from 'react';
import { ADD_RECURRING_EXPENSE_BUTTON_ID } from '../../../utils';
import { Widget } from '../../molecules';
import { Button } from '../../atoms';
import { FirebaseService } from '../../../services';

const AddRecurringExpense = ({ show, dispose }) => {
  const [form, setForm] = useState({
    name: '',
    cost: '',
    due_date: ''
  })

  const submit = () => {
    FirebaseService.pushData('recurring_expenses', form);
  }

  const cancel = () => {
    setForm({
      name: '',
      cost: '',
      due_date: ''
    })
    dispose();
  }

  return (
    show && <Widget triggerPosition={document.getElementById(ADD_RECURRING_EXPENSE_BUTTON_ID).getBoundingClientRect()}>
      <div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input className="input" type="text" name="name" value={form.name} onChange={(event) => setForm({...form, name: event.target.value})}/>
        </div>
        <div className="input-group">
          <label htmlFor="cost">Cost</label>
          <input className="input" type="text" name="cost" value={form.cost} onChange={(event) => setForm({...form, cost: event.target.value})}/>
        </div>
        <div className="input-group">
          <label htmlFor="duedate">Due Date</label>
          <input className="input" type="number" name="duedate" value={form.due_date} onChange={(event) => setForm({...form, due_date: event.target.value})}/>
        </div>
        <div className="mt-2 d-flex justify-content-around">
          <Button text={"Submit"} onClick={submit} className={"small"}/>
          <Button text={"Cancel"} onClick={cancel} className={"small danger"}/>
        </div>
      </div>
    </Widget>
  )
}

export { AddRecurringExpense }
