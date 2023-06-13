import React from "react";
import style from "../style/HeroSection.module.css";
import { clipsData } from "../data/clips";

export default function HeroSection() {
  const [index, setIndex] = React.useState(0);
  const [currClip, setCurrClip] = React.useState(clipsData[index]);

  const nextClip = () => {
    if (index + 1 !== clipsData.length) {
      setIndex(index + 1);
      setCurrClip(clipsData[index + 1]);
    }
  };

  return (
    <div className={style.HeroSection}>
      <div className={style.title}>
        <h1>{currClip.text}</h1>
        <button onClick={() => nextClip()}>
          {index === 0 ? "start" : "continue"}
        </button>
      </div>
      <img className={style.clip} src={currClip.src} />
      <div className={style.scroll}>
        <small>Scroll down to see my development journey</small>
        <p>[SCROLL ANIMATION SVG]</p>
      </div>
    </div>
  );
}
