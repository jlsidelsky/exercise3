import { useState } from "react";
import styles from "./A3.module.css";

const A3 = () => {
  const [rotation, setRotation] = useState({ x: 50, y: 50 });

  return (
    <div
      className={styles["cube"]}
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        position: "fixed",
        top: "50%",
        left: "50%",
        transformOrigin: "center",
        transformStyle: "preserve-3d",
      }}
    >
      <div className={`${styles["cube-face"]} ${styles["cube-front"]}`}></div>
      <div className={`${styles["cube-face"]} ${styles["cube-back"]}`}></div>
      <div className={`${styles["cube-face"]} ${styles["cube-right"]}`}></div>
      <div className={`${styles["cube-face"]} ${styles["cube-left"]}`}></div>
      <div className={`${styles["cube-face"]} ${styles["cube-top"]}`}></div>
      <div className={`${styles["cube-face"]} ${styles["cube-bottom"]}`}></div>
    </div>
  );
};

export default A3;
