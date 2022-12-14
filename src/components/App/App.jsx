import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {good, neutral, bad};

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  }

  const countTotalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={"Statistics"}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        /> 
      </Section>
    </>
      )
}