import React, { useEffect } from 'react';
import '../../../App.css';
import { Card } from '../../molecules';
import { ButtonIcon } from '../../atoms';
import { useRecoilState } from 'recoil';
import { EarningsState } from '../../../recoil/atoms';
import { FirebaseService } from '../../../services';
import { ADD_EARNINGS_BUTTON_ID } from '../../../utils';

const Earnings = ({ clickAdd }) => {
  const [earnings, setEarnings] = useRecoilState(EarningsState);

  useEffect(() => {
    FirebaseService.getDataList('earnings', setEarnings);
  }, [setEarnings])

  const removeEarning = (index) => {
    const auxearnings = [...earnings];
    const toRemove = auxearnings.splice(index, 1);
    FirebaseService.remove('earnings', toRemove[0].key, (erro) => {
      if (!erro) {
        setEarnings(auxearnings);
      }
    });
  }

  const renderEarnings = () => {
    return earnings.map((earning, index) => <tr key={earning.id}>
      <td>{earning.name}</td>
      <td>R$ {earning.value}</td>
      <td>{earning.date}</td>
      <td>
        <ButtonIcon id={`remove-expense-${earning.key}`} icon="minus" onClick={() => removeEarning(index)}/>
      </td>
    </tr>)
  }


  return (
    <Card title={"Earnings"} icon={"money"} floatingButton onClickFloating={clickAdd} floatingButtonId={ADD_EARNINGS_BUTTON_ID}>
      <div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Date</th>
                <th></th>
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
