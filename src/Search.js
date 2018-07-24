import React, {Component} from 'react'

const Search = ({value, onChange, onSubmit, children}) =>
    <form>
    <input type="text" value={value} onChange={onChange}/>
    <button type="submit">
        {children}
    </button>
    </form>

export default Search