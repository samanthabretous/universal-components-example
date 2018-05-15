import React from 'react';
import { View } from 'react-native';
import { Header, Card } from 'uc-example-react-eu';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header
          subtitle="It's great to see all of you"
          title="Hello, React Europe"
          style={{ marginBottom: 8 }}
        />
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
