import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js'
import Table from './Table.js'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const name = 'seungdols';

const user = {
  name,
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      seungdols: 'seungdols',
      searchTerm: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {

    // const updatedList = this.state.list.filter(function isNotId() {
    //   return item.objectID !== id;
    // });

    // function isNotId(id) {
    //   return item.objectID !== id;
    // }

    // const updatedList = this.state.list.filter(isNotId);

    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);

    this.setState({list: updatedList});
    console.log(this);
  }

  onSearchChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange}>Search</Search>
        </div>
          <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    )
  }
}


export default App;
