import { render, screen } from '@testing-library/react'
import location from '../../mocks/location'
import LocationDetails from './LocationDetails'
import useFetch from '../../hooks/useFetch'

jest.mock('../../hooks/useFetch')

describe('LocationDetails', () => {
  test('it should render the name, type, dimension and number of resident for a location', () => {
    (useFetch as jest.Mock).mockImplementationOnce(() => [location])
    render(<LocationDetails locationId={location.id} />)
    
    const name = screen.getByText(/merged universe/i)
    const type = screen.getByText(/planet/i)
    const dimension = screen.getByText(/Merged Dimension/i)
    const residentCount = screen.getByText(/6/i)

    expect(name).toBeInTheDocument()
    expect(type).toBeInTheDocument()
    expect(dimension).toBeInTheDocument()
    expect(residentCount).toBeInTheDocument()
  })

  
  test('it should render Unknown data when there is no location id', () => {
    (useFetch as jest.Mock).mockImplementationOnce(() => [])
    render(<LocationDetails locationId={undefined} />)
    const unknown = screen.getByText(/Unknown data/i)

    expect(unknown).toBeInTheDocument()
  })
})
