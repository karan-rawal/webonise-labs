import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/Components/App';

const TEST_MESSAGE = 'This is a test message.';

ReactDOM.render(<App message={TEST_MESSAGE} />, document.getElementById('root'));
