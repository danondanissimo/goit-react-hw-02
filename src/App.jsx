import "./App.css";

import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const defaultRating = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [rating, setRating] = useState(() => {
    const stringifiedRating = localStorage.getItem("ratingValues");
    const parsedRating = JSON.parse(stringifiedRating) ?? defaultRating;
    return parsedRating;
  });

  const updateFeedback = (feedbackType) => {
    setRating({ ...rating, [feedbackType]: rating[feedbackType] + 1 });
  };

  const totalFeedback = rating.good + rating.neutral + rating.bad;

  const positive = Math.round(
    ((rating.good + rating.neutral) / totalFeedback) * 100
  );

  function reset() {
    setRating(defaultRating);
  }

  useEffect(() => {
    localStorage.setItem("ratingValues", JSON.stringify(rating));
  }, [rating]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        reset={reset}
      />
      {totalFeedback > 0 ? (
        <>
          <Feedback rating={rating} total={totalFeedback} positive={positive} />
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
