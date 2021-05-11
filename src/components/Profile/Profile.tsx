import { Fragment } from 'react'
import styles from './Profile.module.scss'
import { EMOJIS } from '../../const'
import { Character } from '../../types'
import Emoji from '../Emoji/Emoji'

interface Props {
  character: Character
  onLocationClick: () => void
  onOriginClick: () => void
  onEpisodeClick: () => void
}
const Profile = (props: Props) => {
  const { character, onLocationClick, onOriginClick, onEpisodeClick } = props
  const { gender, species, status, location, origin, episode } = character

  const renderStatus = (status: Character['status']) => {
    const emoji: string =
      status === 'Alive'
        ? EMOJIS.heart
        : status === 'Dead'
        ? EMOJIS.skull
        : EMOJIS.questionMark

    return (
      <Fragment>
        <Emoji label={status} symbol={emoji} /> {status}
      </Fragment>
    )
  }

  const renderGender = (gender: Character['gender']) => {
    const emoji: string =
      gender === 'Female' ? EMOJIS.female : gender === 'Male' ? EMOJIS.male : ''

    return (
      <Fragment>
        <Emoji label={gender} symbol={emoji} /> {gender}
      </Fragment>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        {renderGender(gender)} | {species} | {renderStatus(status)}
      </div>

      <h4 className={styles.subHeading}>Location</h4>
      <button className={styles.buttonLink} onClick={onLocationClick}>
        {location.name}
      </button>

      <h4 className={styles.subHeading}>Origin</h4>
      <button className={styles.buttonLink} onClick={onOriginClick}>
        {origin.name}
      </button>

      <h4 className={styles.subHeading}>Appeared in</h4>
      <button className={styles.buttonLink} onClick={onEpisodeClick}>
        {episode?.length} episodes
      </button>
    </div>
  )
}

export default Profile
