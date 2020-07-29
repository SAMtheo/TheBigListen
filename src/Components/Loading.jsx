/* @Author: Samuel Theobald, (2019), GitHub: SAMtheo */
import React from 'react';
import { CircularProgress } from '@material-ui/core';

/**
 * stateless component that displays a circular progress
 * for as long as it needs to.
 */
export default () => (
  <div
    style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20vh',
    }}
  >
    <CircularProgress size={50} />
  </div>
);