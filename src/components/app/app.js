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
        this.createTodoItem('Drink Coffe'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch')
      ]
    };
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  
  deteleItem = (id) => {
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
      }
    });
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState((state) => {
      const newArray = [
        ...state.todoData,
        newItem
      ];

      return {
        todoData: newArray
      };
    });
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx+1)
      ];
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {todoData: this.toggleProperty(todoData, id, 'important')}
    });
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {todoData: this.toggleProperty(todoData, id, 'done')}
    });
  }

  render() {

    const {todoData} = this.state;

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList 
          todos={todoData} 
          onDeleted={this.deteleItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />

        <ItemAddForm 
          onItemAdded={this.addItem} />
      </div>
    );
  }
};