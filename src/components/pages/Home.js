import React, { useState } from 'react';
import { RecurringExpenses, Summary, Earnings, AddRecurringExpense, AddEarnings } from '../organisms';

const Home = () => {
  const [showAddRecurringExpenses, setShowAddRecurringExpenses] = useState(false);
  const [showAddEarning, setShowAddEarning] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 pt-5">
          <div className="row">
            <div className="col-6">
              <RecurringExpenses clickAdd={() => setShowAddRecurringExpenses(true)}/>
              <AddRecurringExpense show={showAddRecurringExpenses} dispose={() => {setShowAddRecurringExpenses(false)}}/>
              {/* Extrato */}

            </div>
            <div className="col-6">
              <Earnings clickAdd={() => setShowAddEarning(true)}/>
              <AddEarnings show={showAddEarning} dispose={() => {setShowAddEarning(false)}}/>
            </div>
          </div>
        </div>
        <div className="col-2 p-0">
          <Summary />
        </div>
      </div>
    </div>
  )
}

export { Home }
