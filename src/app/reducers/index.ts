import { combineReducers } from 'redux';
import listReducer from 'app/list/reducer';

export const rootReducer = combineReducers({
  list: listReducer,
});

export type RootState = ReturnType<typeof rootReducer>
