import express from 'express';
import PhoneBook from 'controller/PhoneBook';

const router = express.Router();

router.route('/phone-numbers')
  .get(PhoneBook.generateTelephoneNo);

router.route('/phone-numbers-list')
  .get(PhoneBook.getAllGeneratedNumbers);

export default router;
