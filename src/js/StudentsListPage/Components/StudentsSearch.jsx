import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import CustomInputBox from '../../Common/Component/CustomInputBox';

const SEARCH_PLACEHOLDER = 'Search Box';
const SEARCH_GLYPHICON = 'glyphicon-search';
const SEARCH_BUTTON_TEXT = 'Search';

/**
 * The presentational react component. Takes searchCallback as prop.
 * 
 * @export
 * @returns 
 */
export default function StudentSearch(props) {
  let searchKey;

  // called when the text changes. We set the changed text in searchKey.
  const onTextChange = (event) => {
    searchKey = event.target.value;
  };

  // we return the searched key when search button is clicked.
  const searchClicked = () => {
    props.searchCallback(searchKey);
  };

  return (<Row>
    <Col xs={8}>
      <CustomInputBox glyphicon={SEARCH_GLYPHICON} onTextChange={onTextChange} placeholder={SEARCH_PLACEHOLDER} />
    </Col>
    <Col xs={4}>
      <Button width="100%" onClick={searchClicked} bsStyle="primary" bsSize="xsmall">{ SEARCH_BUTTON_TEXT }</Button>
    </Col>
  </Row>);
}


/* Defining the property types */
StudentSearch.propTypes = {
  searchCallback: PropTypes.func.isRequired,
};

