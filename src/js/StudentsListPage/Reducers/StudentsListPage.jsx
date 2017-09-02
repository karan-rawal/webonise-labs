import { ACTION_TOGGLE_FILTER, FILTER_TYPES, ACTION_SET_STUDENTS_DATA, ACTION_SET_SEARCH_KEY, GRADE_PERC, GRADE } from '../Constants';

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

const getGrade = (percentage) => {
  if (percentage >= GRADE_PERC.DISTINCTION_PERC) {
    return GRADE.DISTINCTION;
  } else if (percentage >= GRADE_PERC.FIRST_CLASS_PERC) {
    return GRADE.FIRST_CLASS;
  } else if (percentage >= GRADE_PERC.SECOND_CLASS_PERC) {
    return GRADE.SECOND_CLASS;
  }
  return GRADE.FAILED;
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
  tempMarks.grade = getGrade(tempMarks.percentage);

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
    case ACTION_SET_SEARCH_KEY:
      tempState.searchKey = action.payload.searchKey;
      break;
    default:
      console.info('System actions ignored.');
  }

  return tempState;
};

export default StudentsListPageReducer;
