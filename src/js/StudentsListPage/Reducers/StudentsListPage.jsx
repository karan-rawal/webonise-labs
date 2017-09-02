import { ACTION_TOGGLE_FILTER, FILTER_TYPES, ACTION_SET_STUDENTS_DATA } from '../Constants';

const filters = {};
filters[FILTER_TYPES.DISTINCTION] = false;
filters[FILTER_TYPES.FIRST_CLASS] = false;
filters[FILTER_TYPES.SECOND_CLASS] = false;
filters[FILTER_TYPES.FAILED] = false;

const studentsData = {};

const initialState = {
  filters,
  studentsData,
};

const handleActionToggling = (state, filterType) => {
  const tempState = state;
  const filter = tempState.filters[filterType];
  tempState.filters[filterType] = !filter;
  return state;
};

const StudentsListPageReducer = (state = initialState, action) => {
  const tempState = {};
  Object.assign(tempState, state);

  switch (action.type) {
    case ACTION_TOGGLE_FILTER:
      return handleActionToggling(tempState, action.payload.filterType);
    case ACTION_SET_STUDENTS_DATA:
      tempState.studentsData = action.payload.studentsData;
      break;
    default:
      console.error('Invalid action for students filter reducer');
  }

  return tempState;
};

export default StudentsListPageReducer;
