import { checkLimit, checkSort } from 'helper/validator';
import response from 'helper/response';
import { GenerateAndSave, ReadGeneratedNumber } from 'helper/util';

export default class PhoneBook {
  static generateTelephoneNo(req, res) {
    const { limit, sort } = req.query;

    const amountOfTelNoGenerated = checkLimit(limit);
    const unsortedResult = GenerateAndSave(amountOfTelNoGenerated);
    const sortedTelephoneNumbers = checkSort(sort, unsortedResult);

    response(res, 201, { message: 'Telephone successfully generated' }, sortedTelephoneNumbers, sort);
  }

  static getAllGeneratedNumbers(req, res) {
    const { sort } = req.query;

    const telephoneList = ReadGeneratedNumber();
    const sortedTelephoneList = checkSort(sort, telephoneList);

    response(res, 200, { message: 'All telephone numbers successfully retrieved' }, sortedTelephoneList, sort);
  }
}
