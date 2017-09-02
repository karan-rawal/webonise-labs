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

/**
 * Processes the marks obtained in the results. For now it calculates total marks, total out of and percentage.
 * 
 * @param {any} marks 
 * @returns 
 */
const processMarks = (marks) => {
  const tempMarks = marks;

  // process the marks
  const subjects = Object.keys(tempMarks.marks);
  let totalMarks = 0;

  for (let i = 0; i < subjects.length; i += 1) {
    const currentSubject = subjects[i];
    totalMarks += tempMarks.marks[currentSubject];
  }

  const totalOutOf = 100 * subjects.length;
  let percentage = (totalMarks / totalOutOf) * 100;
  percentage = percentage.toFixed(2);

  // attach the data
  tempMarks.percentage = percentage;
  tempMarks.totalMarks = totalMarks;
  tempMarks.totalOutOf = totalOutOf;

  return tempMarks;
};

/**
 * This will process marks for each student's results.
 * 
 * @param {any} results 
 * @returns The processed results.
 */
const processResults = (results) => {
  const processedResults = results.map((marks, keys) => {
    const processedMarks = processMarks(marks);
    return processedMarks;
  });

  return processedResults;
};

/**
 * Processes the results. Calculates and adds some data to the respective objects.
 */
const processStudentsData = (data) => {
  // process the results
  const tempData = data;
  tempData.results = processResults(tempData.results);
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
    default:
      console.error('Invalid action for students filter reducer');
  }

  return tempState;
};

export default StudentsListPageReducer;
