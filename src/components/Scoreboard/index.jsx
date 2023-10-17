import PropTypes from "prop-types";
import "./Scoreboard.css";

function Scoreboard({ value, maxValue }) {
  return (
    <div className="scoreboard">
      <div className="score">High Score: {maxValue}</div>
      <div className="score">Current Score: {value}</div>
    </div>
  );
}

Scoreboard.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};

export default Scoreboard;
