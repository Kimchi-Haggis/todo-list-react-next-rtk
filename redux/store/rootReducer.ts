import todosSlice from '@redux/slice/todosSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    toDos: todosSlice,
})

export default rootReducer;