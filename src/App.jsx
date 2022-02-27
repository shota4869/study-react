/* eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初"); //State更新時にコンポーネントを再レンダリングされるので上から処理が走る
  const [num, setNum] = useState(0); //State
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickSwichShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    console.log("useeffect");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]); //最初の一回だけ処理を走らせたいときだけ
  //numに関心を向けるのでnumが変更されたとき以外はこの処理が走らない

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <button onClick={onClickSwichShowFlg}>on/off</button>
      <p>{num}</p>
      {faceShowFlg && <p>(~~)</p>}
    </>
  );
};

export default App;
