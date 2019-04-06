import { sortAscending, sortDescending } from './util';

export const checkLimit = (limit) => {
  const AmountOfTelNoGenerated = (limit === undefined) ? 1 : limit;

  return AmountOfTelNoGenerated;
};

export const checkSort = (sortAction, arrayToSort) => {
  const sortedTelephoneNumbers = (sortAction === 'ascr' || sortAction === undefined) ? sortAscending(arrayToSort) : sortDescending(arrayToSort);

  return sortedTelephoneNumbers;
};
