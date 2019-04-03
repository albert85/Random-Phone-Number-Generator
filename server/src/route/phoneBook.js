import express from 'express';
import PhoneBook from 'controller/PhoneBook';
import Validator from '../middleware/PhoneBookValidation';

const router = express.Router();

router.route('/phone-numbers')
  .get(Validator.validateLimitParam, PhoneBook.generateTelephoneNo);

router.route('/phone-numbers-list')
  .get(PhoneBook.getAllGeneratedNumbers);

export default router;
