import React, { Component } from 'react';
import {Jumbotron, Grid} from 'react-bootstrap';
import SearchForm from './components/SearchForm';

class App extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
          <Grid>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <SearchForm />
        </Grid>
      </Jumbotron>
      </div>
    );
  }
}

export default App;
