import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {HashRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faChevronDown,
  faChevronRight,
  faCog,
  faHandPointRight,
  faHome,
  faList,
  faPencilAlt,
  faArrowLeft,
  faSpinner,
  faCheckSquare,
  faSquare,
  faTools,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

library.add(faChevronDown, faChevronRight, faHandPointRight, faHome, faSpinner, faPencilAlt, faArrowLeft, faCog, faList,
    faGithub, faCheckSquare, faSquare, faTools, faEnvelope);
ReactDOM.render(
  <HashRouter basename={process.env.REACT_APP_BASE_URL}>
    <App/>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
