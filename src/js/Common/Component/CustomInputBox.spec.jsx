import expect from 'expect';
import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import CustomInputBox from './CustomInputBox';

describe('Custom input text box component', () => {
  it('Should Render', () => {
    const item = renderIntoDocument(<div>
      <CustomInputBox />
    </div>);
    expect(item).toExist();
  });
});
