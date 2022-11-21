import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }))
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total ? Math.round((good / total) * 100) : 0;
  }




  render() {
    const {good, neutral, bad} = this.state
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        </Section>
        <Section title={"Statistics"}>
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={ this.countTotalFeedback() }
          positivePercentage={this.countPositiveFeedbackPercentage()}
        /> 
        </Section>
      </>
    )
  }
}

export default App;