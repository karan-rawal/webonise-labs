import React from 'react';
import PropTypes from 'prop-types';
import './CustomInputBox.scss';

/**
 * A custom input text component.
 * We can put a glyphicon inside this text box.
 * 
 * @export
 * @param {any} props 
 * @returns 
 */
export default function CustomInputBox(props) {
  // undefined initially(meaning, nothing to render)
  let glyphElementToRender;

  // intialize glyph element only when some glyphi is provided
  if (props.glyphicon) {
    const inputGlyphClasses = `glyphicon ${props.glyphicon}`;
    glyphElementToRender = <span className={inputGlyphClasses} />;
  }

  const keyPressed = (event) => {
    if (event.key === 'Enter') {
      props.onEnterPressed();
    }
  };

  // return the element to be rendered
  return (
    <div className="no-padding-right custom-input-text">
      <input onKeyPress={keyPressed} defaultValue={props.defaultValue} onChange={props.onTextChange} placeholder={props.placeholder} />
      {glyphElementToRender}
    </div>
  );
}

/* Defining the property types */
CustomInputBox.propTypes = {
  glyphicon: PropTypes.string,
  onTextChange: PropTypes.func,
  placeholder: PropTypes.string,
};

/* Define the default values */
CustomInputBox.defaultProps = {
  glyphicon: undefined,
  onTextChange: undefined,
  placeholder: undefined,
};
