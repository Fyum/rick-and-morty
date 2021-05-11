import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('it should render the heading', () => {
    render(<App />)
    const headingElement = screen.getByText(/rick and morty characters/i)
    expect(headingElement).toBeInTheDocument()
  })
})
