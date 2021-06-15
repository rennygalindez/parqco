import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import ReactQuery from './react-query-config';
import { BrowserRouter as Router } from 'react-router-dom';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ReactQuery>
        <App />
      </ReactQuery>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
