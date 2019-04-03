import { checkLimit, checkSort } from 'helper/validator';
import { GenerateAndSave } from 'helper/util';

export default class PhoneBook {
  static generateTelephoneNo(req, res) {
    const { limit, sort } = req.query;

    const AmountOfTelNoGenerated = checkLimit(limit);
    const unsortedResult = GenerateAndSave(AmountOfTelNoGenerated);
    const sortedTelephoneNumbers = checkSort(sort, unsortedResult);

    return res.status(201).json({ message: 'Telephone successfully generated', data: sortedTelephoneNumbers });
  }
}
