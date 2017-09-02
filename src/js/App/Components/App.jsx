import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import StudentDetailsPage from '../../StudentDetailsPage/Components/StudentDetailsPage';
import StudentsListPage from '../../StudentsListPage/Components/StudentsListPage';
import { ROUTES } from '../Constants';
import './App.scss';

/**
 * The presentational react component.
 * 
 * @export
 * @param {any} props 
 * @returns 
 */
export default function AppComponent() {
  //TODO - Need to handle unknown routes
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path={ROUTES.STUDENTS_ROUTE} component={StudentsListPage} />
          <Route exact path={ROUTES.STUDENT_DETAILS_ROUTE} component={StudentDetailsPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}
