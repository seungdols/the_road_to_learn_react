import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js'
import Table from './Table.js'

const DEFAULT_QUERY = 'redux'

const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY
    };

    this.setSearchTopStories = this.setSearchTopStories.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  setSearchTopStories(result) {
    this.setState({result})
  }

  componentDidMount() {
    const { searchTerm } = this.state
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error)
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
    const { searchTerm, result } = this.state;

    if(!result) {
      return null
    }

    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange}>Search</Search>
        </div>
          <Table list={result.hits} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    )
  }
}


export default App;
