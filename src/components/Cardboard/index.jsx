import PropTypes from "prop-types";
import Card from "../Card";
import "./Cardboard.css";

import { useEffect, useState } from "react";

const NUM_CARDS = 4;

function Cardboard({ setScore }) {
  const [contents, setContents] = useState(Array(NUM_CARDS).fill(null));

  useEffect(() => {
    setContents(["🐶", "🐱", "🐭", "🐹"]);
  }, []);

  function onClick(ii) {
    const newContents = [...contents];
    newContents[order[ii]] = "👻";
    setContents(newContents);
    if (contents[order[ii]] === "👻") {
      setScore(0);
      setContents(["🐶", "🐱", "🐭", "🐹"]);
    } else {
      setScore((prevScore) => prevScore + 1);
    }
  }
  // range up to NUM_CARDS
  const order = [...Array(NUM_CARDS).keys()].sort(() => Math.random() - 0.5);
  return (
    <div className="cardboard">
      {Array(NUM_CARDS)
        .fill()
        .map((_, ii) => (
          <Card
            key={ii}
            onClick={() => onClick(ii)}
            content={contents[order[ii]]}
          ></Card>
        ))}
    </div>
  );
}

Cardboard.propTypes = {
  setScore: PropTypes.func.isRequired,
};

export default Cardboard;
