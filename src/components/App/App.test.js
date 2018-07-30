import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';
import Search from '../Search'
import Button from '../Button'
import Table from '../Table'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () =>{
    const component = renderer.create(
      <App />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Search', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Search>Search</Search>, div)
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Search>Search</Search>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Button', () => {
  // it('renders without crashing', () => {
  //   const div = document.createElement('div')
  //   ReactDOM.render(<Button>Give me a More</Button>, div)
  //  })
  it('renders without crashing', () => {
    const element = shallow(
      <Button>Give me a More</Button>
    )

    expect(element.contains('Give me a More')).toEqual(true)
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Button>Give me a More</Button>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Table', () => {

  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
    ],
    sortKey: 'TITLE',
    isSortReverse: false,
  };

  it('renders without crashing', () => {
    const element = shallow(
      <Table { ...props } />
    )

    expect(element.find('.table-row').length).toBe(2)
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Table list={props.list} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

