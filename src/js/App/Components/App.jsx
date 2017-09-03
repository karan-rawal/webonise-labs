import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import StudentDetailsPage from '../../StudentDetailsPage/Components/StudentDetailsPage';
import StudentsListPageContainer from '../../StudentsListPage/Container/StudentsListPage';
import { ROUTES } from '../Constants';
import '../../results.json';
import './App.scss';

/**
 * The presentational react component.
 * 
 * @export
 * @returns 
 */
export default function AppComponent() {
  // TODO - Need to handle unknown routes
  return (
    <HashRouter>
      <div
        className="container"
      >
        <Row>
          <Col
            xsOffset={2}
            xs={8}
          >
            <Switch>
              <Route
                exact
                path={ROUTES.STUDENTS_ROUTE}
                component={StudentsListPageContainer}
              />
              <Route
                exact
                path={ROUTES.STUDENT_DETAILS_ROUTE}
                component={StudentDetailsPage}
              />
            </Switch>
          </Col>
        </Row>
      </div>
    </HashRouter>
  );
}
