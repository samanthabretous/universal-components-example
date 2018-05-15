import React, { Component } from 'react';
import propTypes from 'prop-types';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
} from '@kkemple/react-primitives';

class Card extends Component {
  static propTypes = {
    image: propTypes.oneOfType([propTypes.object, propTypes.string]).isRequired,
    subtitle: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
  };

  state = {
    animatedValue: new Animated.Value(0),
  };

  componentWillMount = () => {
    this.colorAnimation = this.state.animatedValue.interpolate({
      inputRange: [0, 0.7],
      outputRange: ['#000000', '#111111'],
      extrapolate: 'clamp',
    });

    this.opacityAnimation = this.state.animatedValue.interpolate({
      inputRange: [0.3, 0.8],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
  };

  animateIn = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 750,
      // can't use `useNativeDriver` because we animate a bg color
    }).start();
  };

  render = () => (
    <View style={[styles.container, this.props.style]}>
      <Animated.View
        style={[styles.image, { backgroundColor: this.colorAnimation }]}
      />
      <Animated.Image
        style={[
          styles.image,
          {
            opacity: this.opacityAnimation,
          },
        ]}
        onLoadEnd={() => this.animateIn()}
        source={this.props.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.subtitle}>{this.props.subtitle}</Text>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    height: 450,
    justifyContent: 'space-between',
    maxWidth: '100%',
    overflow: 'hidden',
    width: 300,
  },
  contentContainer: {
    alignItems: 'stretch',
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 8,
  },
});
