export const FeedbackOptions = ({options, onLeaveFeedback}) => {
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

// (
//     <section>
//       <h2>Please leave feedback</h2>
//       <button>Good</button>
//       <button>Neutral</button>
//       <button>Bad</button>
//     </section>
//   )