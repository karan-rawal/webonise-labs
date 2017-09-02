import React from 'react';
import { PropTypes } from 'prop-types';
import { Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../App/Constants';
import './StudentDetailsPage.scss';

/**
 * The presentational react component.
 * 
 * @export
 * @returns 
 */
export default function StudentDetailsPage(props, context) {
  const state = context.router.history.location.state;

  if (!state) {
    context.router.history.push({
      pathname: '/',
    });
    return <div />;
  }
  const student = state.student;

  return (<Col className="student-details-page" xs={12}>
    <Row>
      <Col xs={12}>
        <Link className="back-link" to={ROUTES.STUDENTS_ROUTE}>Click here to go Back</Link>
      </Col>
      <Col xs={12}>
        <div className="student-name">Name: {student.firstName} {student.lastName} </div>
      </Col>
      <Col xs={12}>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>English</th>
              <th>Hindi</th>
              <th>Mathematics</th>
              <th>Total</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{student.marks.english}</td>
              <td>{student.marks.hindi}</td>
              <td>{student.marks.mathematics}</td>
              <td>{student.totalMarks}</td>
              <td>{student.percentage}</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Col>
  );
}

StudentDetailsPage.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};
