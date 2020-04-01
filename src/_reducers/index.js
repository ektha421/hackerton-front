import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { home } from './home.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    home,
});

export default rootReducer;
