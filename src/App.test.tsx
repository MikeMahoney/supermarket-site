import React from 'react'
import './matchMedia.mock'
import { render } from '@testing-library/react'
import App from './App'

it('renders without crashing', () => {
  render(<App />)
})
