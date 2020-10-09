import React, { useState, useEffect } from 'react';
import '../../../App.css';
import { Card } from '../../molecules';
import { useSetRecoilState } from 'recoil';
import { EarningsTotal } from '../../../recoil/atoms';

const Earnings = () => {
  const [earnings, setEarnings] = useState([
    {
      id: 1,
      name: 'Rent',
      value: 650.00,
      date: 15
    }, {
      id: 2,
      name: 'Rent',
      value: 650.00,
      date: 15
    }, {
      id: 3,
      name: 'Rent',
      value: 1000.00,
      date: 15
    }
  ]);
  const setTotal = useSetRecoilState(EarningsTotal)

  useEffect(() => {
    let total = 0;
    for (let index = 0; index < earnings.length; index++) {
      total += earnings[index].value;
    }
    setTotal(total);
  }, [earnings, setTotal])

  const renderEarnings = () => {
    return earnings.map(earning => <tr key={earning.id}>
      <td>{earning.name}</td>
      <td>R$ {earning.value}</td>
      <td>{earning.date}</td>
    </tr>)
  }


  return (
    <Card title={"Earnings"} icon={"money"}>
      <div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {renderEarnings()}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}

export { Earnings }
