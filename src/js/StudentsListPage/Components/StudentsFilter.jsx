import React from 'react';
import { Checkbox, Row, Col } from 'react-bootstrap';
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
      <Col xs={6}>
        <Checkbox id={FILTER_TYPES.DISTINCTION} onClick={props.onFilterToggle} checked={props.filters[FILTER_TYPES.DISTINCTION]} title={'Distinction'}>
          {'Distinction'}
        </Checkbox>
        <Checkbox id={FILTER_TYPES.SECOND_CLASS} onClick={props.onFilterToggle} checked={props.filters[FILTER_TYPES.SECOND_CLASS]} title={'Distinction'}>
          {'Second Class'}
        </Checkbox>
      </Col>
      <Col xs={6}>
        <Checkbox id={FILTER_TYPES.FIRST_CLASS} onClick={props.onFilterToggle} checked={props.filters[FILTER_TYPES.FIRST_CLASS]} title={'Distinction'}>
          {'First Class'}
        </Checkbox>
        <Checkbox id={FILTER_TYPES.FAILED} onClick={props.onFilterToggle} checked={props.filters[FILTER_TYPES.FAILED]} title={'Distinction'}>
          {'Fail'}
        </Checkbox>
      </Col>
    </Row>
  );
}
