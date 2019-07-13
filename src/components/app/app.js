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
      ],

      term: '',

      group: 'all'
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
        }
      });
    }

    this.addItem = (text) => {
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

    this.onToggleImportant = (id) => {
      this.setState(({todoData}) => {
        return {todoData: this.toggleProperty(todoData, id, 'important')}
      });
    }

    this.onToggleDone = (id) => {
      this.setState(({todoData}) => {
        return {todoData: this.toggleProperty(todoData, id, 'done')}
      });
    }

    this.onSearchChange = (term) => {
      this.setState({term});
    }

    this.onFiltetChange = (group) => {
      this.setState({group});
    }
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
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

/*  setProperty(arr, id, propName, propValue) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: propValue};

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx+1)
      ];
  }*/

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label
      .toLowerCase()
      .indexOf(term.toLowerCase()) > -1;
    });
  }

  filter(items, group) {
    switch(group){
      case 'all': 
        return items;
      case 'active': 
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
    /* old version
    if (group === 'all') {
     return items;
    }

    if (group === 'done') {
     return items.filter((item) => item.done);
    }
    else {
      return items.filter((item) => !item.done);
    }*/
  }

  render() {

    const {todoData, term, group} = this.state;
    const visibyleItems = this.search(
      this.filter(todoData, group), term);

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel 
            onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            group={group} 
            onFiltetChange={this.onFiltetChange} />
        </div>

        <TodoList 
          todos={visibyleItems} 
          onDeleted={this.deteleItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />

        <ItemAddForm 
          onItemAdded={this.addItem} />
      </div>
    );
  }
};