import React, { useState } from "react";
import "./style.css";
import { RESNET50_IMAGE_URLS } from "./ImageList";
const Carousel = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="container">
      <button
        className="left-button"
        onClick={() =>
          setIndex((prev) =>
            prev === 0 ? RESNET50_IMAGE_URLS.length - 1 : prev - 1
          )
        }
      >
        left
      </button>

      <img
        src={RESNET50_IMAGE_URLS[index].value}
        height="100px"
        width="100px"
        className="image"
        alt="fff"
      />

      <button
        className="right-button"
        onClick={() =>
          setIndex((prev) =>
            prev === RESNET50_IMAGE_URLS.length - 1 ? 0 : prev + 1
          )
        }
      >
        right
      </button>
    </div>
  );
};

export default Carousel;
