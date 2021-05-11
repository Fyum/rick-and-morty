import React, { useState } from 'react'
import styles from './App.module.scss'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import usePaginatedFetch from './hooks/usePaginatedFetch'
import { getCharacters } from './network/api'

const App = () => {
  const [page, setPage] = useState(1)
  const [characters, loading, errors, pagination, refetch] =
    usePaginatedFetch(getCharacters)

  const handleLoadMore = (e: React.MouseEvent) => {
    const { hasMore } = pagination
    if (!hasMore) return

    setPage((page) => page + 1)
    refetch({ page: page + 1 })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Rick and Morty characters</h1>
      <div className={styles.cardList}>
        {characters?.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <div className={styles.buttonArea}>
        <Button onClick={handleLoadMore}>Load more</Button>
      </div>
      {loading && <div className={styles.loading}>Loading...</div>}
      {errors && <div className={styles.errors}>`Error: ${errors}`</div>}
    </div>
  )
}

export default App
