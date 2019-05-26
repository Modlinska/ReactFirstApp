import React from 'react';
import ReactDOM from 'react-dom';
import CoverPage from "./components/coverPage";
import './../scss/style.scss';

const App = () => <CoverPage/>;

ReactDOM.render(
<App />,
    document.querySelector('#app')
);