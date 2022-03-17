import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  console.log("render");
  const [num, setNum] = useState(100);
  const [showFaceFlag, setShowFaceFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFaceFlag = () => {
    setShowFaceFlag(!showFaceFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      showFaceFlag || setShowFaceFlag(true);
    } else {
      showFaceFlag && setShowFaceFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchShowFaceFlag}>
        顔文字{showFaceFlag && "非"}表示
      </button>
      <p>{num}</p>
      {showFaceFlag && <p>('Д')</p>}
    </>
  );
};

export { App };
