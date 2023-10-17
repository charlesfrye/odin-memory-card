import PropTypes from "prop-types";

function Scoreboard({ value, maxValue }) {
  return (
    <div className="scoreboard">
      <div>High Score: {maxValue}</div>
      <div>Current Score: {value}</div>
    </div>
  );
}

Scoreboard.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};

export default Scoreboard;
