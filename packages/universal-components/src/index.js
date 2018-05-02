import React from 'react';
import propTypes from 'prop-types';
import { View, Text, Image, Animated, StyleSheet } from 'react-primitives';

const Card = ({ title, subtitle, image }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={image} />
    <View style={styles.contentContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </View>
);

Card.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  image: propTypes.oneOf([propTypes.object, propTypes.string]).isRequired,
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    borderColor: '#eee',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    margin: 16,
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
  title: {
    marginBottom: 16,
  },
  subtitle: {
    color: '#cccccc',
    fontSize: 12,
  },
});
