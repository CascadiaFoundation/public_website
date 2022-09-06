import { combineReducers } from '@reduxjs/toolkit';

import application from './application/reducer';
import web3Context from './global/web3ContextSlice';

const reducer = combineReducers({
  application,
  web3Context,
});

export default reducer;
