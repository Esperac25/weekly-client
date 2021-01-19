import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Router } from 'react-router-dom';
import history from './history';
import WeeklyProvider from './WeeklyProvider';

ReactDOM.render(
	<Router history={history}>
		<WeeklyProvider>
			<App />
		</WeeklyProvider>
	</Router>,
	document.getElementById('root')
);
