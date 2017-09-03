import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Table } from 'react-bootstrap';
import { GRADE } from '../Constants';
import './StudentsTable.scss';


/**
 * The presentational react component.
 * 
 * @export
 * @returns 
 */
export default function StudentsTable(props) {
  /**
   * Filteres the data according to the category
   * 
   * @param {any} resultsData 
   * @returns Filtered list according to the selected grades.
   */
  const categoryFilterdData = (resultsData) => {
    if (!resultsData || !props.filters) {
      return resultsData;
    }

    // create filtered data
    const filteredData = [];

    // tranverse the data and fill the filtered array
    resultsData.map((result) => {
      // the index of '1' in '0010' determines the grade of the student
      const indexOfOne = result.grade.indexOf('1');
      const keys = Object.keys(props.filters);
      // the index of '1' will help use find the key to check
      const keyToCheck = keys[indexOfOne];
      // lets check if the value of that key is true. If yes, push it.
      if (props.filters[keyToCheck]) {
        filteredData.push(result);
      }

      return result;
    });

    // return the filtered array.
    return filteredData;
  };

  /**
   * Filters the result by search key.
   * 
   * @param {any} resultsData 
   * @returns 
   */
  const keyFilteredResultsData = (resultsData) => {
    // if no search key then return data as is
    if (!resultsData || !props.searchKey || props.searchKey.length <= 0) {
      return resultsData;
    }

    // create filtered data
    const filteredData = [];

    // tranverse the data and fill the filtered array
    resultsData.map((result) => {
      const fname = result.firstName;
      const lname = result.lastName;

      // if fname or lname contains searchKey then push it to the filtered array.
      if (fname.indexOf(props.searchKey) > -1 || lname.indexOf(props.searchKey) > -1) {
        filteredData.push(result);
      }

      return result;
    });

    // return the filtered array.
    return filteredData;
  };

  /**
   * Filters the data. By key and by marks.
   * 
   * @param {any} studentData 
   * @returns 
   */
  const filteredData = (studentData) => {
    const tempStudentData = studentData;

    // filter by search key
    tempStudentData.results = keyFilteredResultsData(studentData.results);
    tempStudentData.results = categoryFilterdData(tempStudentData.results);
    return tempStudentData;
  };

  const renderData = () => {
    // create a copy of the daya
    let data = {};
    Object.assign(data, props.studentsData);

    // get the filtered data
    data = filteredData(data);

    let rows = [];
    if (data && data.results) {
      const results = data.results;

      rows = results.map((value, key) => {
        let classToAdd = '';
        if (value.grade === GRADE.FAILED) {
          classToAdd = 'failed-row';
        }
        const studentData = JSON.stringify(value);
        const element = (<tr
          className={classToAdd}
          key={key}
        >
          <td><a
            tabIndex={0}
            role="button"
            data={studentData}
            onClick={props.onStudentSelect}
          >{value.firstName}</a></td>
          <td>{value.lastName}</td>
          <td>{value.percentage}</td>
        </tr>);
        return element;
      });
    }

    if (rows.length <= 0) {
      return (<tr>
        <td
          colSpan={3}
        >No results found.</td>
      </tr>);
    }
    return rows;
  };


  return (
    <Row>
      <Col
        xs={12}
      >
        <Table
          striped
          bordered
          condensed
          hover
        >
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody
            className="students-table-body"
          >
            {renderData()}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

StudentsTable.propTypes = {
  onStudentSelect: PropTypes.func.isRequired,
  searchKey: PropTypes.string.isRequired,
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
  }).isRequired,
};
