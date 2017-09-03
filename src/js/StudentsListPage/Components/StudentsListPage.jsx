import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
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
  onFilterToggle: PropTypes.func.isRequired,
  onStudentSelect: PropTypes.func.isRequired,
  searchCallback: PropTypes.func.isRequired,
};

