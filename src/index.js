import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPannel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

	const todoData = [
		{lable: 'Drink Coffee', important: false, id: 1},
		{lable: 'Make Awesome App', important: true, id: 2},
		{lable: 'Have a lunch', important: false, id: 3}
	];


	return (
		<div>
			<AppHeader />
			<SearchPannel />
			<TodoList todos={todoData}/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
