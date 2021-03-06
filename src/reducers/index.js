import { combineReducers } from 'redux';
import BookReducer from './reducers_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: ActiveBook
});

export default rootReducer;
