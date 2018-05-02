import React, { Component } from 'react';
import Card from 'uc-example-react-eu';

const title = 'Example Card';
const subtitle = 'Rendered using react-primitives';
const image = { uri: 'https://source.unsplash.com/random' };

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card title={title} subtitle={subtitle} image={image} />
      </div>
    );
  }
}

export default App;
