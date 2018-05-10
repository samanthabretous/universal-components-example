import React from 'react';
import propTypes from 'prop-types';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
} from '@kkemple/react-primitives';

const Header = ({ title, subtitle, style }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

Header.propTypes = {
  subtitle: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    maxWidth: '100%',
    overflow: 'hidden',
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
    fontSize: 24,
  },
  title: {
    color: '#000000',
    marginBottom: 16,
    fontSize: 54,
    fontWeight: 'bold',
  },
});
