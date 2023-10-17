import PropTypes from "prop-types";
import Card from "../Card";
import "./Cardboard.css";

import { useEffect, useState } from "react";

const NUM_CARDS = 10;
const generateSeeds = () => {
  return Array.from({ length: NUM_CARDS }, () =>
    Math.floor(Math.random() * 1000)
  );
};

function Cardboard({ setScore }) {
  const [contents, setContents] = useState(Array(NUM_CARDS).fill(null));
  const [clicks, setClicks] = useState(Array(NUM_CARDS).fill(false));

  useEffect(() => {
    let ignore = false;
    const seeds = generateSeeds();

    // Fetch images based on the seeds
    const fetchImages = async () => {
      const blobs = await Promise.all(
        seeds.map((seed) =>
          fetch(`https://picsum.photos/seed/${seed}/200/200`).then((response) =>
            response.blob()
          )
        )
      );

      // Convert blobs to data URLs
      const dataUrls = await Promise.all(
        blobs.map((blob) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
        })
      );

      if (!ignore) {
        setContents(dataUrls);
      }
    };
    fetchImages();
    return () => {
      ignore = true;
    };
  }, []);

  function onClick(ii) {
    const newClicks = [...clicks];
    newClicks[order[ii]] = true;
    setClicks(newClicks);
    if (clicks[order[ii]] === true) {
      setScore(0);
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
        .map((_, ii) =>
          contents[order[ii]] ? (
            <Card
              key={ii}
              onClick={() => onClick(ii)}
              content={contents[order[ii]]}
            ></Card>
          ) : null
        )}
    </div>
  );
}

Cardboard.propTypes = {
  setScore: PropTypes.func.isRequired,
};

export default Cardboard;
