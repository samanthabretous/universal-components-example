import React, { Component } from 'react';
import { Card } from 'uc-example-react-eu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card
          image={{ uri: 'https://source.unsplash.com/random' }}
          subtitle="Rendered using react-primitives"
          title="Example Card"
          style={{ borderColor: '#eeeeee', borderWidth: 1 }}
        />
      </div>
    );
  }
}

export default App;
