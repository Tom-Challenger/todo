import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
	return (
		<ul>
			<li>Learn React</li>
			<li>Build Awesome App</li>
		</ul>
	);
};

const AppHeader = () => {
	return <h1>My Todo List</h1>;
};

const SearchPannel = () => {
	return <input placeholder="search" />;
};

const App = () => {
	return (
		<div>
			<AppHeader />
			<SearchPannel />
			<TodoList />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
