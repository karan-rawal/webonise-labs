import { ACTION_TOGGLE_FILTER, FILTER_TYPES, ACTION_SET_STUDENTS_DATA, ACTION_SET_SEARCH_KEY, GRADE } from '../Constants';
import ResultsProcessor from '../Utils/ResultsProcessor';

const filters = {};
filters[FILTER_TYPES.DISTINCTION] = true;
filters[FILTER_TYPES.FIRST_CLASS] = true;
filters[FILTER_TYPES.SECOND_CLASS] = true;
filters[FILTER_TYPES.FAILED] = true;

const studentsData = {};

const searchKey = '';

const initialState = {
  filters,
  studentsData,
  searchKey,
};

const handleActionToggling = (state, filterType) => {
  const tempState = state;
  const filter = tempState.filters[filterType];
  tempState.filters[filterType] = !filter;
  return state;
};

/**
 * Processes the results. Calculates and adds some data to the respective objects.
 */
const processStudentsData = (data) => {
  // process the results
  const tempData = data;
  tempData.results = ResultsProcessor.processResults(tempData.results);
  return tempData;
};

const StudentsListPageReducer = (state = initialState, action) => {
  const tempState = {};
  Object.assign(tempState, state);

  switch (action.type) {
    case ACTION_TOGGLE_FILTER:
      return handleActionToggling(tempState, action.payload.filterType);
    case ACTION_SET_STUDENTS_DATA:
      tempState.studentsData = processStudentsData(action.payload.studentsData);
      break;
    case ACTION_SET_SEARCH_KEY:
      tempState.searchKey = action.payload.searchKey;
      break;
    default:
      console.info('System actions ignored.');
  }

  return tempState;
};

export default StudentsListPageReducer;
