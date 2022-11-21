import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            onClick={() => {
              onLeaveFeedback(option)
            }}
          >{option}</button>
        )
      })}
    </>
  )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions