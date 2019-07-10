import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.maxId = 100;
    this.state = {
      todoData: [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
      ]
    };

    this.deteleItem = (id) => {
      this.setState((state) => {
        const idx = state.todoData.findIndex((el) => el.id === id);

        // [a, b, c, d, e]
        // [a, b,    d, e]
        const newArray = [ 
          ...state.todoData.slice(0, idx),
          ...state.todoData.slice(idx + 1)
        ];

        return {
          todoData: newArray
        };
      });
    };

    this.addItem = (text) => {
      this.setState((state) => {
        const newItem = {
          label: text,
          important: false,
          id: this.maxId++
        };

        const newArray = [
          ...state.todoData,
          newItem
        ];

        return {
          todoData: newArray
        };
      });
    };
  };

  render() {
    let classNames = 'todo-app';

    return (
      <div className={classNames}>
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} 
        onDeleted={this.deteleItem}/>

        <ItemAddForm 
        onAdd={this.addItem}/>
      </div>
    );
  };
};