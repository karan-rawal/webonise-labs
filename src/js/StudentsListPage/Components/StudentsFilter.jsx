import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Row, Col } from 'react-bootstrap';
import CustomPropTypes from '../CustomPropTypes';
import { FILTER_TYPES } from '../Constants';

/**
 * The presentational react component.
 * 
 * @export
 * @returns 
 */
export default function StudentsFilter(props) {
  // Maybe we can use a loop for the checkboxes. Keeping it separate for now.
  return (
    <Row>
      <Col
        xs={6}
      >
        <Checkbox
          id={FILTER_TYPES.DISTINCTION}
          onClick={props.onFilterToggle}
          defaultChecked={props.filters[FILTER_TYPES.DISTINCTION]}
          title={'Distinction'}
        >
          {'Distinction'}
        </Checkbox>
        <Checkbox
          id={FILTER_TYPES.SECOND_CLASS}
          onClick={props.onFilterToggle}
          defaultChecked={props.filters[FILTER_TYPES.SECOND_CLASS]}
          title={'Distinction'}
        >
          {'Second Class'}
        </Checkbox>
      </Col>
      <Col
        xs={6}
      >
        <Checkbox
          id={FILTER_TYPES.FIRST_CLASS}
          onClick={props.onFilterToggle}
          defaultChecked={props.filters[FILTER_TYPES.FIRST_CLASS]}
          title={'Distinction'}
        >
          {'First Class'}
        </Checkbox>
        <Checkbox
          id={FILTER_TYPES.FAILED}
          onChange={props.onFilterToggle}
          defaultChecked={props.filters[FILTER_TYPES.FAILED]}
          title={'Distinction'}
        >
          {'Fail'}
        </Checkbox>
      </Col>
    </Row>
  );
}

StudentsFilter.propTypes = {
  onFilterToggle: PropTypes.func.isRequired,
  filters: CustomPropTypes.Filters.isRequired,
};
