import React, { useState } from "react";
import style from "./Gallery.module.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useSwipeable } from "react-swipeable";
import { useParams } from "react-router-dom";

export default function Gallery({ images }) {
  const { initvalue } = useParams();
  const [index, setIndex] = useState(initvalue ? parseInt(initvalue) : 0);
  const showPrevImage = () =>
    setIndex((prev) => {
      if (prev === 0) return images.length - 1;
      else return prev - 1;
    });
  const showNextImage = () =>
    setIndex((prev) => {
      console.log(index);
      if (prev === images.length - 1) return 0;
      else return prev + 1;
    });
  const handlers = useSwipeable({
    onSwipedLeft: showPrevImage,
    onSwipedRight: showNextImage,
  });
  return (
    <div className={style.background} {...handlers}>
      <div className={style.container}>
        <img
          id="image"
          className={style.image}
          src={images[index]}
          alt="file missing"
        />
        <button className={style.btn_left} onClick={showPrevImage}>
          <BsChevronCompactLeft />
        </button>
        <button className={style.btn_right} onClick={showNextImage}>
          <BsChevronCompactRight />
        </button>
      </div>
    </div>
  );
}
