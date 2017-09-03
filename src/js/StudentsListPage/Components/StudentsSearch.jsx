import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import './StudentsSearch.scss';
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
  let searchKey = props.searchKey;

  // called when the text changes. We set the changed text in searchKey.
  const onTextChange = (event) => {
    searchKey = event.target.value;
  };

  // we return the searched key when search button is clicked.
  const searchClicked = () => {
    props.searchCallback(searchKey);
  };

  return (
    <Row
      className="students-search"
    >
      <Col
        className="no-padding-right"
        xs={10}
      >
        <CustomInputBox
          onEnterPressed={searchClicked}
          defaultValue={props.searchKey}
          glyphicon={SEARCH_GLYPHICON}
          onTextChange={onTextChange}
          placeholder={SEARCH_PLACEHOLDER}
        />
      </Col>
      <Col
        className="no-padding-left"
        xs={2}
      >
        <Button
          className="search-button"
          onClick={searchClicked}
          bsStyle="primary"
          bsSize="xsmall"
        >{ SEARCH_BUTTON_TEXT }</Button>
      </Col>
    </Row>
  );
}


/* Defining the property types */
StudentSearch.propTypes = {
  searchCallback: PropTypes.func.isRequired,
  searchKey: PropTypes.string.isRequired,
};

