import fs from 'fs';
import path from 'path';

const phoneBook = {
  production: `${path.join(__dirname, '../database')}/phoneBookProd.csv`,
  test: `${path.join(__dirname, '../database')}/phoneBookTest.csv`,
  development: 'stagingPhoneBook.csv',
};

export const GenerateArrayOfNumber = (numberToBeGenerated) => {
  let i = 0;
  const arrOfNumberGenerated = [];

  const AmtToBeGenerated = numberToBeGenerated > 10000 ? 10000 : numberToBeGenerated;

  while (i < AmtToBeGenerated) {
    const numbergenerated = Math.floor(Math.random() * 899999999 + 100000000);
    arrOfNumberGenerated.push(`0${numbergenerated}`);
    i += 1;
  }

  return arrOfNumberGenerated;
};


export const ReadGeneratedNumber = () => {
  const x = fs.readFileSync(`${phoneBook[process.env.NODE_ENV]}`);

  const readNumber = [...x.toString().split(',')];
  const filteredNumber = readNumber.filter(generatedNumber => generatedNumber !== '');

  return filteredNumber;
};

export const GenerateAndSave = (amountToGenerate) => {
  const generatedNumbers = GenerateArrayOfNumber(amountToGenerate);
  const combinedGeneratedNumbers = [...generatedNumbers, ...ReadGeneratedNumber()];
  const filteredNumber = Array.from(new Set(combinedGeneratedNumbers));

  fs.writeFileSync(`${phoneBook[process.env.NODE_ENV]}`, filteredNumber);

  return generatedNumbers;
};

export const sortAscending = telephoneNumberToSort => telephoneNumberToSort.sort((a, b) => a - b);
export const sortDescending = telephoneNumberToSort => telephoneNumberToSort.sort((a, b) => b - a);

export const clearFile = () => {
  fs.writeFileSync(`${phoneBook[process.env.NODE_ENV]}`, []);
};
