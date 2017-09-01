import React from 'react';
import PropTypes from 'prop-types';

/**
 * The presentational react component.
 * 
 * @export
 * @param {any} props 
 * @returns 
 */
export default function AppComponent(props) {
  return (<div className="app-component">
    The App Component. This is the passed message: {props.message}
  </div>);
}

/* Defining the property types */
AppComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
