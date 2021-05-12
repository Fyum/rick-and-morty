import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import character from '../../mocks/character'
import Card from './Card'

describe('Card', () => {
  test('it should render the name', () => {
    render(<Card character={character} />)
    const headingElement = screen.getByText(/baby/i)

    expect(headingElement).toBeInTheDocument()
  })

  test('it should render the location details when clicked on the location', () => {
    render(<Card character={character} />)
    const location = screen.getByTestId('location')
    userEvent.click(location)
    const heading = screen.getByText(/location details/i)
    expect(heading).toBeInTheDocument()
  })

  test('it should render the origin details when clicked on the origin', () => {
    render(<Card character={character} />)
    const origin = screen.getByTestId('origin')
    userEvent.click(origin)
    const heading = screen.getByText(/origin details/i)
    expect(heading).toBeInTheDocument()
  })

  test('it should render the list of appeareance when clicked on the number of episodes', () => {
    render(<Card character={character} />)
    const episode = screen.getByTestId('episode')
    userEvent.click(episode)
    const heading = screen.getByText(/list of appearance/i)
    expect(heading).toBeInTheDocument()
  })
})
