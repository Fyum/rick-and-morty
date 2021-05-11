import { useState } from 'react'
import { ViewType, Character, UrlString } from '../../types'
import EpisodesList from '../EpisodesList/EpisodesList'
import LocationDetails from '../LocationDetails/LocationDetails'
import styles from './Card.module.scss'
import Profile from '../Profile/Profile'

interface Props {
  character: Character
}

const getResourceIds = (urls: Array<UrlString>): Array<number> =>
  urls.map(getResourceId).filter(Boolean) as Array<number>

const getResourceId = (url: UrlString): number =>
  Number(url.split('/').slice().pop())

const Card = (props: Props) => {
  const { character } = props
  const { name, location, episode, origin } = character
  const [currentView, setCurrentView] = useState<ViewType>('character')

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={character.image} alt={name}></img>
      </div>
      {currentView === 'character' && (
        <div className={styles.infoContainer}>
          <h3 className={styles.heading}>{name}</h3>
          <Profile
            character={character}
            onEpisodeClick={() => setCurrentView('episodes')}
            onLocationClick={() => setCurrentView('location')}
            onOriginClick={() => setCurrentView('origin')}
          />
        </div>
      )}
      {currentView === 'location' && (
        <div className={styles.infoContainer}>
          <h3
            className={styles.heading}
            onClick={() => setCurrentView('character')}
          >
            Location details
          </h3>
          <LocationDetails locationId={getResourceId(location.url)} />
          <div
            className={styles.back}
            onClick={() => setCurrentView('character')}
          >
            <b>Back</b>
          </div>
        </div>
      )}

      {currentView === 'origin' && (
        <div className={styles.infoContainer}>
          <h3
            className={styles.heading}
            onClick={() => setCurrentView('character')}
          >
            Origin details
          </h3>
          <LocationDetails locationId={getResourceId(origin.url)} />
          <div
            className={styles.back}
            onClick={() => setCurrentView('character')}
          >
            <b>Back</b>
          </div>
        </div>
      )}
      {currentView === 'episodes' && (
        <div className={styles.infoContainer}>
          <h3
            className={styles.heading}
            onClick={() => setCurrentView('character')}
          >
            List of appearances
          </h3>
          <EpisodesList episodeIds={getResourceIds(episode)} />
          <div
            className={styles.back}
            onClick={() => setCurrentView('character')}
          >
            <b>Back</b>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
