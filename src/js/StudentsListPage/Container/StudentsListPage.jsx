import React from 'react';
import { connect } from 'react-redux';
import StudentsFilterActions from '../Actions/StudentsFilter';
import StudentsListPage from '../Components/StudentsListPage';

class StudentsListPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; // to avoid eslint errors
    console.log(props.state);
    this.onFilterToggle = this.onFilterToggle.bind(this);
  }

  onFilterToggle(event) {
    const filterType = event.target.getAttribute('id');
    this.props.filterAction(filterType);
  }

  render() {
    return (
      <StudentsListPage onFilterToggle={this.onFilterToggle} state={this.props.state} />
    );
  }
}

const mapStateToProps = state => ({
  state: state.studentsList,
});

const mapDispatchToProps = dispatch => ({
  filterAction: (filterType) => { dispatch(StudentsFilterActions.toggleFilterAction(filterType)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentsListPageContainer);
