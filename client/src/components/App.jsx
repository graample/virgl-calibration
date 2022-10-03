import React from 'react';
import AnimalList from './AnimalList.jsx'
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    this.setState({
      animals: [{
        id: 1,
        name: 'Eric',
        species: 'Cow',
        age: 24,
        size: 'large',
        colour: 'red'
      },
      {
        id: 2,
        name: 'Daniel',
        species: 'Dog',
        age: 10,
        size: 'small',
        colour: 'white'
      }]
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Animal Rescue Organization!</h1>
        <Search />
        <AnimalList list={this.state.animals}/>
      </div>
    );
  }
}

export default App;