import { ACTION_SET_STUDENTS_DATA } from '../Constants';

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

const StudentsListPageActions = {
  getStudentsAction,
  setStudentsDataAction,
};

export default StudentsListPageActions;
