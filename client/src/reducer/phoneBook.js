import { GENERATE_TELEPHONE_NUMBER_SUCCESS, GET_ALL_TELEPHONE_NUMBER_SUCCESS } from '../common/types';


const initiateState = {
  message: '',
  min:'',
  max: '',
  data: []
}
const phoneBook = (state = initiateState, action) => {
  switch (action.type) {
    case GENERATE_TELEPHONE_NUMBER_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case GET_ALL_TELEPHONE_NUMBER_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default phoneBook;
