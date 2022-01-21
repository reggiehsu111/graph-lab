import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/App.scss';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
