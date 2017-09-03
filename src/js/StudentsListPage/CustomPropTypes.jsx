import PropTypes from 'prop-types';

const StudentsData = PropTypes.shape({
  results: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    marks: PropTypes.shape({
      english: PropTypes.number.isRequired,
      hindi: PropTypes.number.isRequired,
      mathematics: PropTypes.number.isRequired,
    }),
  })),
});

const filterShape = {
  FILTER_DISTINCTION: PropTypes.bool.isRequired,
  FILTER_FIRST_CLASS: PropTypes.bool.isRequired,
  FILTER_SECOND_CLASS: PropTypes.bool.isRequired,
  FILTER_FAILED: PropTypes.bool.isRequired,
};
const Filters = PropTypes.shape(filterShape);

const State = PropTypes.shape({
  filters: Filters,
  studentsData: StudentsData,
});

export default {
  StudentsData,
  Filters,
  State,
};
