import css from "./Options.module.css";

const Options = ({ updateFeedback, total, reset }) => {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <button onClick={() => updateFeedback("good")}>Good</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("bad")}>Bad</button>
        </li>
        {total > 0 && (
          <li>
            <button onClick={() => reset()}>Reset</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Options;
