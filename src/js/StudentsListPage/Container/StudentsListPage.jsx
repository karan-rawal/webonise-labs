import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StudentsFilterActions from '../Actions/StudentsFilter';
import StudentsListPageActions from '../Actions/StudentsListPage';
import StudentsListPage from '../Components/StudentsListPage';

class StudentsListPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; // to avoid eslint errors
    this.onFilterToggle = this.onFilterToggle.bind(this);
    this.searchCallback = this.searchCallback.bind(this);
    this.onStudentSelect = this.onStudentSelect.bind(this);
  }

  componentWillMount() {
    this.props.getStudentsData();
  }

  onFilterToggle(event) {
    const filterType = event.target.getAttribute('id');
    this.props.filterAction(filterType);
  }

  onStudentSelect(event) {
    const student = JSON.parse(event.target.getAttribute('data'));
    this.context.router.history.push({
      pathname: '/student',
      state: { student },
    });
  }

  searchCallback(searchValue) {
    this.props.setSearchKeyAction(searchValue);
  }

  render() {
    return (
      <StudentsListPage
        onStudentSelect={this.onStudentSelect}
        searchCallback={this.searchCallback}
        onFilterToggle={this.onFilterToggle}
        state={this.props.state}
      />
    );
  }
}

const mapStateToProps = state => ({
  state: state.studentsList,
});

const mapDispatchToProps = dispatch => ({
  filterAction: (filterType) => { dispatch(StudentsFilterActions.toggleFilterAction(filterType)); },
  getStudentsData: () => { StudentsListPageActions.getStudentsAction(dispatch); },
  setSearchKeyAction: (searchKey) => {
    dispatch(StudentsListPageActions.setSearchKeyAction(searchKey));
  },
});

StudentsListPageContainer.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};

StudentsListPageContainer.propTypes = {
  setSearchKeyAction: PropTypes.func.isRequired,
  filterAction: PropTypes.func.isRequired,
  getStudentsData: PropTypes.func.isRequired,
  state: PropTypes.shape({
    filters: PropTypes.arrayOf(PropTypes.bool).isRequired,
    studentsData: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        marks: PropTypes.shape({
          english: PropTypes.number.isRequired,
          hindi: PropTypes.number.isRequired,
          mathematics: PropTypes.number.isRequired,
        }),
      })).isRequired,
    }),
    searchKey: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsListPageContainer);
