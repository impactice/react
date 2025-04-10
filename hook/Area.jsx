import { useState } from "react";
const Area = () => {
  const [size, setSize] = useState({ width: 200, height: 100 });
  return (
    <div>
      <h1>
        너비 : {size.width}, 높이 : {size.height}
      </h1>
      <button
        onClick={() => {
          const copy = { ...size };
          copy.width = size.width >= 130 ? 150 : size.width + 20;
          setSize(copy);
        }}
      >
        너비 증가
      </button>
      <button
        onClick={() => {
          const copy = { ...size };
          copy.width = size.width >= 20 ? 0 : size.width - 20;
          setSize(copy);
        }}
      >
        너비 감소
      </button>
      <button
        onClick={() => {
          const copy = { ...size };
          copy.height = size.height >= 140 ? 150 : size.height +10;
          setSize(copy);
        }}
      >
        높이 증가
      </button>
      <button
        onClick={() => {
          const copy = { ...size };
          copy.height = size.height <= 10 ? 0 : size.height -10;
          setSize(copy);
        }}
      >
        높이 감소
      </button>
    </div>
  );
};
export default Area;
