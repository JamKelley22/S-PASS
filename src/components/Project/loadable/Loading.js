import React from 'react';
import LoadingScreen from './LoadingScreen.js';

export default function Loading({ isLoading, pastDelay, error }) {
  if (isLoading && pastDelay) {
    return <LoadingScreen/>;
  } else if (error && !isLoading) {
    return <p>Error!</p>;
  } else {
    return null;
  }
}
