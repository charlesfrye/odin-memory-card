import PropTypes from "prop-types";
import "./Card.css";

function Card({ onClick, content }) {
  return (
    <div onClick={onClick} className="card">
      <img src={content}></img>
    </div>
  );
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.object,
};

export default Card;
