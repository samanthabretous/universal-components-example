import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-360';

import Card from 'uc-example-react-eu';

const title = 'Example Card';
const subtitle = 'Rendered using react-primitives';
const image = { uri: 'https://source.unsplash.com/random' };

export default class vr_app extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <Card title={title} subtitle={subtitle} image={image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('vr_app', () => vr_app);
