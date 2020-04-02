import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { home } from './home.reducer';
import { book } from './book.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    home,
    book,
});

export default rootReducer;
