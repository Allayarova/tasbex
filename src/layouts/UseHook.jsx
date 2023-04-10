import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const UseHook = () => {
  const [count, setCount] = useState(0);
  const [sumCount, setSumCount] = useState(0);

  const [kun, setKun] = useState(true);
  const [tun, setTun] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setSumCount(sumCount + 1);
    if (count == 99) {
      setCount(0);
    }
  };

  const resetClick = () => {
    setCount(0);
    setSumCount(0);
  };

  const toogleClick = () => {
    if (kun) {
      setKun(false);
    } else {
      setKun(true);
    }

    if (tun) {
      setTun(false);
    } else {
      setTun(true);
    }
  };

  return (
    <div
      className="count"
      style={{ backgroundColor: tun ? "#000" : "#007336" }}
    >
      <div className="tabloTop">
        <div className="reset" onClick={resetClick}>
          Reset
        </div>

        <div className="reset2">
          {kun ? (
            <FaMoon onClick={toogleClick} />
          ) : (
            <FaSun onClick={toogleClick} />
          )}
        </div>
      </div>
      <div className="tablo">
        <div className="tablo1">
          <span>Jami : </span> {sumCount}
        </div>

        <div className="tablo2">
          <div>{count}</div> / <div>99</div>
        </div>
      </div>
      <div
        className="sum"
        onClick={handleClick}
        style={{ backgroundColor: tun ? "white" : "white" }}
      >
        {count}
      </div>
      
    </div>
  );

};

export default UseHook;
