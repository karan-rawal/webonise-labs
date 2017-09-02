import React from 'react';
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
  console.log(props);
  return (<Col xs={12}>
    <StudentsSearch searchCallback={props.searchCallback} />
    <StudentsFilter onFilterToggle={props.onFilterToggle} filters={props.state.filters} />
    <StudentsTable onStudentSelect={props.onStudentSelect} filters={props.state.filters} searchKey={props.state.searchKey} studentsData={props.state.studentsData} />
  </Col >);
}
