import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Table } from 'react-bootstrap';
import CustomPropTypes from '../CustomPropTypes';
import { GRADE } from '../Constants';
import DataFilterer from '../Utils/DataFilterer';
import './StudentsTable.scss';


/**
 * The presentational react component.
 * 
 * @export
 * @returns 
 */
export default function StudentsTable(props) {
  /**
   * Filters the data. By key and by marks.
   * 
   * @param {any} studentData 
   * @returns 
   */
  const filteredData = (studentData) => {
    const tempStudentData = studentData;

    // filter by search key
    tempStudentData.results = DataFilterer.filterBySearchKey(studentData.results, props.searchKey);
    tempStudentData.results = DataFilterer.categoryFilterdData(
      tempStudentData.results,
      props.filters,
    );
    return tempStudentData;
  };

  const renderData = (studentsData, onStudentSelected) => {
    // create a copy of the daya
    let data = {};
    Object.assign(data, studentsData);

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
            onClick={onStudentSelected}
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
            {renderData(props.studentsData, props.onStudentSelect)}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

StudentsTable.propTypes = {
  onStudentSelect: PropTypes.func.isRequired,
  searchKey: PropTypes.string.isRequired,
  filters: CustomPropTypes.Filters.isRequired,
  studentsData: CustomPropTypes.StudentsData.isRequired,
};
