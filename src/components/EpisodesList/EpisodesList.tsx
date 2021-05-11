import useFetch from '../../hooks/useFetch'
import { getEpisodeById } from '../../network/api'
import { Episode } from '../../types'
import styles from './EpisodesList.module.scss'

interface Props {
  episodeIds: Array<number>
}

const EpisodesList = (props: Props) => {
  const { episodeIds } = props

  const [episodes, loading, errors] = useFetch<Episode[]>(() =>
    getEpisodeById(episodeIds),
  )

  const ensureArray = (episodes: Episode[] = []): Episode[] =>
    Array.isArray(episodes) ? episodes : [episodes]

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {ensureArray(episodes).map((episode) => (
          <div key={episode.id} className={styles.episode}>
            <div className={styles.airDate}>{episode.air_date}</div>
            <div className={styles.name}>{episode.name}</div>
          </div>
        ))}
      </div>
      {loading && <div className={styles.loading}>Loading...</div>}
      {errors && <div className={styles.errors}>`Error: ${errors}`</div>}
    </div>
  )
}

export default EpisodesList
