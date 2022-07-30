import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics/';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addPoint = e => {
    //
    switch (e.target.name) {
      case 'good':
        setGood(s => s + 1);
        break;

      case 'neutral':
        setNeutral(s => s + 1);
        break;

      case 'bad':
        setBad(s => s + 1);
        break;

      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    const pos = good + neutral;
    const count = (pos / total) * 100;
    return !count ? 0 : count.toFixed(2);
  };

  return (
    <>
      <div>
        <Section title="Please leave Feetback">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={addPoint}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + neutral + bad}
            positivePercentage={countPositiveFeedbackPercentage().toString()}
          />
        </Section>

        {/* <Notification message="There is no feedback"/> */}
      </div>
    </>
  );
};

export default App;
