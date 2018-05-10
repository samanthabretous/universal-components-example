import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, View } from '@kkemple/react-primitives';

const Card = ({ title, subtitle, image, style }) => (
  <View style={[styles.container, style]}>
    <View style={styles.image} />
    <View style={styles.contentContainer}>
      <View style={styles.title} />
      <View style={styles.subtitle} />
    </View>
  </View>
);

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
    backgroundColor: '#142F3E',
  },
  subtitle: {
    backgroundColor: '#142F3E',
    height: 12,
    width: 150,
  },
  title: {
    backgroundColor: '#142F3E',
    marginBottom: 16,
    height: 24,
    width: 200,
  },
});
