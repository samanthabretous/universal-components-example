import React, { Component } from 'react';
import { Header, Card } from 'uc-example-react-eu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card
          image={{ uri: 'https://source.unsplash.com/random' }}
          subtitle="Rendered using react-primitives"
          title="Example Card"
          style={{ margin: 16 }}
        />
      </div>
    );
  }
}

export default App;
