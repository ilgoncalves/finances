import React, { useState } from 'react';
import { RecurringExpenses, Summary, Earnings, AddRecurringExpense } from '../organisms';

const Home = () => {
  const [showAddRecurringExpenses, setShowAddRecurringExpenses] = useState(false);

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
              <Earnings />
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
