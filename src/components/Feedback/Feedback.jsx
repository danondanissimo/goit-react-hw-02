import css from "./Feedback.module.css";

const Feedback = ({ rating, total, positive }) => {
  return (
    <div>
      <ul className={css.list}>
        <li>Good: {rating.good}</li>
        <li>Neutral: {rating.neutral}</li>
        <li>Bad: {rating.bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positive || "0"}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
