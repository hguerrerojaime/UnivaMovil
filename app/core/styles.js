import React from 'react';
import { StyleSheet } from 'react-native';

import vars from '../config/stylevars.json';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbar: {
    backgroundColor: vars.toolbarBg,
    height: 56,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  h1: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  brandPrimary: {
    color: vars.brandPrimary
  },
  brandWarning: {
    color: vars.brandWarning
  },
  component: {
    padding: 5
  }
});

export default styles;
