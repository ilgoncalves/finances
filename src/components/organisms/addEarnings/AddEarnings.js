import React, { useState } from 'react';
import { ADD_EARNINGS_BUTTON_ID } from '../../../utils';
import { Widget } from '../../molecules';
import { Button } from '../../atoms';
import { FirebaseService } from '../../../services';
import { useRecoilState } from 'recoil';
import { EarningsState } from '../../../recoil/atoms';

const AddEarnings = ({ show, dispose }) => {
  const [earnings, setEarnings] = useRecoilState(EarningsState);
  const [form, setForm] = useState({
    name: '',
    value: '',
    date: ''
  })

  const submit = () => {
    FirebaseService.pushData('earnings', form, (erro, id) => {
      if (!erro) {
        setEarnings([...earnings, { ...form, key: id }]);
        setForm({
          name: '',
          value: '',
          date: ''
        })
        dispose();
      }
    });
  }

  const cancel = () => {
    setForm({
      name: '',
      value: '',
      date: ''
    })
    dispose();
  }

  return (
    show && <Widget triggerPosition={document.getElementById(ADD_EARNINGS_BUTTON_ID).getBoundingClientRect()}>
      <div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input className="input" type="text" name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        </div>
        <div className="input-group">
          <label htmlFor="value">Value</label>
          <input className="input" type="text" name="value" value={form.value} onChange={(event) => setForm({ ...form, value: event.target.value })} />
        </div>
        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input className="input" type="number" name="date" value={form.due_date} onChange={(event) => setForm({ ...form, date: event.target.value })} />
        </div>
        <div className="mt-2 d-flex justify-content-around">
          <Button text={"Submit"} onClick={submit} className={"small"} />
          <Button text={"Cancel"} onClick={cancel} className={"small danger"} />
        </div>
      </div>
    </Widget>
  )
}

export { AddEarnings }
