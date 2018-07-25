import React, {Component} from 'react'
import Button from '../Button'

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

const largeColumn = {
  width: '40%',
}

const midColumn = {
  width: '30%',
}

const smallColumn = {
  width: '10%',
}


const Table = ({list, pattern, onDismiss}) =>
  <div className="table">
  {list.filter(isSearched(pattern)).map(item =>
      <div key={item.objectID}>
        <span style={largeColumn}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={midColumn}> {item.author} </span>
        <span style={smallColumn}>{item.num_comments} </span>
        <span style={smallColumn}>{item.points} </span>
        <span style={smallColumn}>
          <Button onClick={() => onDismiss(item.objectID)} >
            Dismiss
          </Button>
        </span>
      </div>
    )}
    <br />
    </div>

export default Table