import PropTypes from "prop-types";

function Card({ onClick, content }) {
  return <div onClick={onClick}>{content}</div>;
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.object,
};

export default Card;
