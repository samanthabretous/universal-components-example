import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-360';

import { Card } from 'uc-example-react-eu';

export default class vr_app extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
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
