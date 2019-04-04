import { GENERATE_TELEPHONE_NUMBER_SUCCESS } from '../common/types';

const phoneBook = (state = [], action) => {
  switch (action.type) {
    case GENERATE_TELEPHONE_NUMBER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default phoneBook;
