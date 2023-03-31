import React, { useState } from 'react'
import Section from './Section/Section'
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import { Container, Wrapper } from './App.styled';

function App() {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const clickHandler = (event) => {
    const key = event.target.id;
    switch (key) {
      case 'good':
        setGoodFeedback(prev => prev + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prev => prev + 1);
        break;
      case 'bad':
        setBadFeedback(prev => prev + 1)
        break;
      default: console.log('hi')
    }
  }

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total
  }
  
  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback()
    return total > 0 ? Math.round(good/total*100):0
  }
    
    return (<Container>
    <Wrapper>
    <Section title='Please leave feedback' children={
      <FeedbackOptions options={{good, neutral, bad}}
        onLeaveFeedback={clickHandler}/>
      } />
    <Section title='Statistics'
      children={countTotalFeedback() > 0 &&
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positive={countPositiveFeedbackPercentage()} />
    }></Section>
        </Wrapper>
    </Container>
    );
};

export {App}