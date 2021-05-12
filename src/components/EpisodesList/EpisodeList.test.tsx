import { render, screen } from '@testing-library/react'
import episodes from '../../mocks/episodes'
import EpisodesList from './EpisodesList'
import useFetch from '../../hooks/useFetch'

jest.mock('../../hooks/useFetch')

describe('EpisodesList', () => {
  test('it should render the name and dates of the epsiodes', () => {
    (useFetch as jest.Mock).mockImplementationOnce(() => [episodes])
    render(<EpisodesList episodeIds={episodes.map(x => x.id)} />)
    const name1 = screen.getByText(/pilot/i)
    const date1 = screen.getByText(/december 2, 2013/i)
    const name2 = screen.getByText(/lawnmower dog/i)
    const date2 = screen.getByText(/december 9, 2013/i)
    const name3 = screen.getByText(/anatomy park/i)
    const date3 = screen.getByText(/december 16, 2013/i)

    expect(name1).toBeInTheDocument()
    expect(date1).toBeInTheDocument()
    expect(name2).toBeInTheDocument()
    expect(date2).toBeInTheDocument()
    expect(name3).toBeInTheDocument()
    expect(date3).toBeInTheDocument()
  })

  
  test('it should render the name and dates of one episode', () => {
    (useFetch as jest.Mock).mockImplementationOnce(() => [episodes[0]])
    render(<EpisodesList episodeIds={[episodes[0].id]} />)
    const name1 = screen.getByText(/pilot/i)
    const date1 = screen.getByText(/december 2, 2013/i)

    expect(name1).toBeInTheDocument()
    expect(date1).toBeInTheDocument()
  })
})
