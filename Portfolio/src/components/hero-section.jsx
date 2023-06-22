import React from "react";
import style from "../style/hero-section.module.css";
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

  const nextScene = () => {
    console.log("next scene");
  };

  return (
    <div className={style.HeroSection}>
      <div className={style.title}>
        <h1>{currClip.text}</h1>
        <button
          onClick={() =>
            index === clipsData.length - 1 ? nextScene() : nextClip()
          }
        >
          {index === 0
            ? "start"
            : index === clipsData.length - 1
            ? "my work style"
            : "continue"}
        </button>
      </div>
      <img className={style.clip} src={currClip.src} />
    </div>
  );
}
