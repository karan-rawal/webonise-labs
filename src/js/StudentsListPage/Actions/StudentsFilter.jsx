import { ACTION_TOGGLE_FILTER } from '../Constants';

const toggleFilterAction = filterType => ({
  type: ACTION_TOGGLE_FILTER,
  payload: {
    filterType,
  },
});

const StudentsFilterActions = {
  toggleFilterAction,
};

export default StudentsFilterActions;
