import PropTypes from 'prop-types'
import Notification from "components/Notification"
import { List, ListItem } from './Statistics.styled'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <>
      {total ? (
        <List>
        <ListItem>Good: { good }</ListItem>
        <ListItem>Neutral: { neutral }</ListItem>
        <ListItem>Bad: { bad }</ListItem>
        <ListItem>Total: { total }</ListItem>
        <ListItem>Positive feedback: { positivePercentage }%</ListItem>
      </List>
      ) : (
          <Notification message="There is no feedback"/>
      )}
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;