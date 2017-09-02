import React from 'react';
import { Col } from 'react-bootstrap';
import StudentsSearch from './StudentsSearch';
import StudentsFilter from './StudentsFilter';
import StudentsTable from './StudentsTable';

/**
 * The presentational react component.
 * 
 * @export
 * @returns 
 */
export default function StudentsListPage(props) {
  console.log(props);
  return (<Col xs={12}>
    <StudentsSearch />
    <StudentsFilter onFilterToggle={props.onFilterToggle} filters={props.state.filters} />
    <StudentsTable studentsData={props.state.studentsData} />
  </Col >);
}
