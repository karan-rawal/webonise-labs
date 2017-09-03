import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import CustomPropTypes from '../CustomPropTypes';
import StudentsSearch from './StudentsSearch';
import StudentsFilter from './StudentsFilter';
import StudentsTable from './StudentsTable';
import './StudentsTable.scss';

/**
 * The presentational react component.
 * 
 * @export
 * @returns 
 */
export default function StudentsListPage(props) {
  const state = props.state;
  return (<Col
    xs={12}
  >
    <StudentsSearch
      searchKey={state.searchKey}
      searchCallback={props.searchCallback}
    />
    <StudentsFilter
      onFilterToggle={props.onFilterToggle}
      filters={state.filters}
    />
    <StudentsTable
      onStudentSelect={props.onStudentSelect}
      filters={state.filters}
      searchKey={state.searchKey}
      studentsData={state.studentsData}
    />
  </Col >);
}

StudentsListPage.propTypes = {
  state: CustomPropTypes.State.isRequired,
  onFilterToggle: PropTypes.func.isRequired,
  onStudentSelect: PropTypes.func.isRequired,
  searchCallback: PropTypes.func.isRequired,
};

