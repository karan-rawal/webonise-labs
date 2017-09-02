import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

/**
 * The presentational react component.
 * 
 * @export
 * @returns 
 */
export default function StudentsTable(props) {
  const renderData = () => {
    let rows = [];
    if (props.studentsData.results) {
      const results = props.studentsData.results;

      rows = results.map((value, key) => (<tr key={key}>
        <td>{value.firstName}</td>
        <td>{value.lastName}</td>
        <td>{value.percentage}</td>
      </tr>));
    }
    return rows;
  };


  return (
    <Row>
      <Col xs={12}>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {renderData()}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
