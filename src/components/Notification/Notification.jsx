import PropTypes from 'prop-types'
import { NotificationStyle } from './Notification.styled'

const Notification = ({ message }) => {
  return (
    <NotificationStyle>{ message }</NotificationStyle>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification