
import React from 'react'
import { render } from '@testing-library/react'
import App from '../../App'

describe('App.js', () => {
  it('ttt', () => {
    const app = render(<App />)
    console.log(app)
  })
})

// test('renders learn react link', () => {
//   const { getByText } = render(<App />)
//   const linkElement = getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })
