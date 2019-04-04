import { combineReducers } from 'redux';

import '../../public/css/styles.css';

import phoneBook from './phoneBook';

const rootReducer = combineReducers({
  phoneBook,
});

export default rootReducer;
