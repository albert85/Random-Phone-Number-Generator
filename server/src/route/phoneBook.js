import express from 'express';
import PhoneBook from 'controller/PhoneBook';

const router = express.Router();

router.route('/phone-numbers')
  .get(PhoneBook.generateTelephoneNo);

export default router;
