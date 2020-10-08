import React from 'react';
import { RecurringExpenses, Summary } from '../organisms';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 pt-5">
          <div className="col-5">
            <RecurringExpenses />
            {/* Extrato */}

          </div>
          <div className="col-5">
            {/* Entradas regulares */}

          </div>
        </div>
        <div className="col-2 p-0">
          {/* Resumo */}
          <Summary />
        </div>
      </div>
    </div>
  )
}

export { Home }
