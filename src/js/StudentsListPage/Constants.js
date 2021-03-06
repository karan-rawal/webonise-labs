export const ACTION_TOGGLE_FILTER = 'TOGGLE_FILTER';

export const FILTER_TYPES = {
  DISTINCTION: 'FILTER_DISTINCTION',
  FIRST_CLASS: 'FILTER_FIRST_CLASS',
  SECOND_CLASS: 'FILTER_SECOND_CLASS',
  FAILED: 'FILTER_FAILED',
};


export const GRADE_PERC = {
  DISTINCTION_PERC: 75,
  FIRST_CLASS_PERC: 60,
  SECOND_CLASS_PERC: 35,
  FAILED_PERC: 0,
};

export const GRADE = {
  DISTINCTION: '1000', // first bit indicate distinction
  FIRST_CLASS: '0100',
  SECOND_CLASS: '0010',
  FAILED: '0001', // last bit indicates fail
};


export const ACTION_SET_STUDENTS_DATA = 'SET_STUDENTS_DATA';
export const ACTION_SET_SEARCH_KEY = 'SET_SEARCH_KEY';
