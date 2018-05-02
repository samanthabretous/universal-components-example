import React from 'react';
import { View } from 'react-native';
import Card from 'uc-example-react-eu';

const title = 'Example Card';
const subtitle = 'Rendered using react-primitives';
const image = { uri: 'https://source.unsplash.com/random' };

export default class App extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: 40, paddingHorizontal: 16 }}>
        <Card title={title} subtitle={subtitle} image={image} />
      </View>
    );
  }
}
