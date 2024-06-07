import { useState } from "react";
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const StatisticLine = ({ text, value }) => {
    return (
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    );
  };
  const Statistic = ({ good, neutral, bad }) => {
    return (
      <>
        <h1>Statistics</h1>

        {good == 0 && neutral == 0 && bad == 0 ? (
          <p>No feedback given</p>
        ) : (
          <table>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <StatisticLine text="all" value={good + neutral + bad} />
              <StatisticLine text="average" value={((good - bad) / 3).toFixed(1)} />
              <StatisticLine
                text="positive"
                value={((good / (good + bad)) * 100).toFixed(1)}
              />
          </table>
        )}
      </>
    );
  };
  return (
    <>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
