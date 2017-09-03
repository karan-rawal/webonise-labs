import expect from 'expect';
import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import App from './App';

describe('App Component', () => {
  it('Should Render', () => {
    const item = renderIntoDocument(<div>
      <App
        message={'some test message'}
      />
    </div>);
    expect(item).toExist();
  });
});
