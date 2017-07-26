import React from 'react'
import { browserHistory } from 'react-router'

export const BackButton = () => (
  <div className="">
    <button onClick={browserHistory.goBack}>Back</button>
  </div>
)
