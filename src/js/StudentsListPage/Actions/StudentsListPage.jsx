import { ACTION_SET_STUDENTS_DATA, ACTION_SET_SEARCH_KEY } from '../Constants';

const setStudentsDataAction = studentsData => ({
  type: ACTION_SET_STUDENTS_DATA,
  payload: {
    studentsData,
  },
});

const getStudentsAction = (dispatch) => {
  fetch('/json/results.json')
    .then(response => response.text()).then((body) => {
      const studentsData = JSON.parse(body);
      dispatch(setStudentsDataAction(studentsData));
    });
};

const setSearchKeyAction = searchKey => ({
  type: ACTION_SET_SEARCH_KEY,
  payload: {
    searchKey,
  },
});

const StudentsListPageActions = {
  getStudentsAction,
  setStudentsDataAction,
  setSearchKeyAction,
};

export default StudentsListPageActions;
