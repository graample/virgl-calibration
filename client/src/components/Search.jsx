import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      query: event.target.value
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log('submitting: ' + this.state.query);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Search;