import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import StudentsSearch from './StudentsSearch';
import StudentsFilter from './StudentsFilter';

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
    <Row>
      <Col xs={12}>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Col >);
}
