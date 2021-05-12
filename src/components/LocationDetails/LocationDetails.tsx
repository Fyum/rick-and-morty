import styles from './LocationDetails.module.scss'
import useFetch from '../../hooks/useFetch'
import { getLocationById } from '../../network/api'
import { IdType } from '../../types'

interface Props {
  locationId?: IdType
}

const LocationDetails = (props: Props) => {
  const { locationId } = props

  const [location, loading, errors] = useFetch(() =>
    getLocationById(locationId),
  )

  if (!locationId) {
    return <div className={styles.container}>Unknown data</div>
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.subHeading}>Name</h4>
      <div>{location?.name}</div>

      <h4 className={styles.subHeading}>Type</h4>
      <div>{location?.type}</div>

      <h4 className={styles.subHeading}>Dimension</h4>
      <div>{location?.dimension}</div>

      <h4 className={styles.subHeading}>Number of residents</h4>
      <div>{location?.residents.length}</div>
      {loading && <div className={styles.loading}>Loading...</div>}
      {errors && <div className={styles.errors}>`Error: ${errors}`</div>}
    </div>
  )
}

export default LocationDetails
