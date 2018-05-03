import React from 'react';
import propTypes from 'prop-types';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
} from '@kkemple/react-primitives';

const Card = ({ title, subtitle, image, style }) => (
  <View style={[styles.container, style]}>
    <Image style={styles.image} source={image} />
    <View style={styles.contentContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </View>
);

Card.propTypes = {
  image: propTypes.oneOfType([propTypes.object, propTypes.string]).isRequired,
  subtitle: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    maxWidth: '100%',
    overflow: 'hidden',
    width: 475,
  },
  contentContainer: {
    alignItems: 'stretch',
    flex: 1,
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
  },
  subtitle: {
    color: '#cccccc',
    fontSize: 12,
  },
  title: {
    color: '#000000',
    marginBottom: 16,
  },
});
