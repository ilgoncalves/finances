import { selector } from 'recoil';
import { EarningsState } from '../atoms';

export const EarningsTotal = selector({
  key: 'EarningsTotal',
  get: ({get}) => {
    const earnings = get(EarningsState);

    let total = 0;
    for (let index = 0; index < earnings.length; index++) {
      total += parseFloat(earnings[index].value);
    }
    return total;

  }
});