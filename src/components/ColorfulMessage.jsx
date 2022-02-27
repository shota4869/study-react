import React from "react";

const ColorfulMessage = (props) => {
  console.log("子"); //親のコンポーネントが変更されたら再レンダリングされる
  const { color, children } = props; //分割代入
  const contentStyle = {
    color, //プロパティ名と当てはめる値が同じ場合は：以降の記述を省略できる
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
