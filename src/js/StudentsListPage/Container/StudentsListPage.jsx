import React from 'react';
import { connect } from 'react-redux';
import StudentsFilterActions from '../Actions/StudentsFilter';
import StudentsListPageActions from '../Actions/StudentsListPage';
import StudentsListPage from '../Components/StudentsListPage';

class StudentsListPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; // to avoid eslint errors
    console.log(props.state);
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
    console.log(event);
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
      <StudentsListPage onStudentSelect={this.onStudentSelect} searchCallback={this.searchCallback} onFilterToggle={this.onFilterToggle} state={this.props.state} />
    );
  }
}

const mapStateToProps = state => ({
  state: state.studentsList,
});

const mapDispatchToProps = dispatch => ({
  filterAction: (filterType) => { dispatch(StudentsFilterActions.toggleFilterAction(filterType)); },
  getStudentsData: () => { StudentsListPageActions.getStudentsAction(dispatch); },
  setSearchKeyAction: (searchKey) => { dispatch(StudentsListPageActions.setSearchKeyAction(searchKey)); },
});

StudentsListPageContainer.contextTypes = {
  router: React.PropTypes.shape({
    history: React.PropTypes.object.isRequired,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsListPageContainer);
