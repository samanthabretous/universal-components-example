import React from 'react';
import { View } from 'react-native';
import { Card } from 'uc-example-react-eu';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Card
          image={{ uri: 'https://source.unsplash.com/random' }}
          subtitle="Rendered using react-primitives"
          title="Example Card"
          style={{ borderColor: '#eeeeee', borderWidth: 1 }}
        />
      </View>
    );
  }
}
