
class PhoneBookValidation {
  static validateLimitParam(req, res, next) {
    req.checkQuery('limit', 'You must enter a number greater than 0').isInt({ min: 1 });

    if (req.validationErrors()) {
      return res.status(422).json({ message: 'Failed to generate Telephone', errors: req.validationErrors() });
    }

    return next();
  }
}

export default PhoneBookValidation;
