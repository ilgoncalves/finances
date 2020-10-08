import React from 'react';
import { RecurringExpenses, Summary, Earnings } from '../organisms';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 pt-5">
          <div className="row">
            <div className="col-6">
              <RecurringExpenses />

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
