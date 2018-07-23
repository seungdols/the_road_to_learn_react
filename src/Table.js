import React, {Component} from 'react'
import Button from './Button.js'

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class Table extends React.Component {

    render() {
        const {list, pattern, onDismiss} = this.props;
        return (
            <div>
            {list.filter(isSearched(pattern)).map(item =>
                <div key={item.objectID}>
                  <span>
                    <a href={item.url}>{item.title}</a>
                  </span>
                  <span> {item.author} </span>
                  <span>{item.num_comments} </span>
                  <span>{item.points} </span>
                  <span>
                    <Button onClick={() => this.onDismiss(item.objectID)} >
                      Dismiss
                    </Button>
                  </span>
                </div>
              )}
              <br />
              </div>
        )
    }
}

export default Table