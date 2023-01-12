import { useEffect, useState, useRef } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Mine = () => {
  const [state, setState] = useState(0);
  const [count, setCount] = useState(0);
  const rewardTarget = useRef();
  console.log(state);

  useEffect(() => {
    console.log(rewardTarget);
    console.log(rewardTarget.current);

    if (state != 0) {
      rewardTarget.current.classList.add("openreward");
    }
    // rewardTarget.classList.add("openreward");
  }, [state]);

  const mining = () => {
    setCount(count + 1);
    rewardTarget.current.classList.remove("openreward");
    if (count == 10) {
      setState(state + 1);
      setCount(0);
    }
  };

  return (
    <div className="page-layout mine-page">
      <Link to="/">
        <div className="Village-enter mine-vil">마을로 이동</div>
      </Link>
      <br />
      <span style={{ color: "#fff", fontSize: "50px" }}>채굴량 : {state}</span>
      <br />
      <div
        style={{ width: "450px", backgroundColor: "red", textAlign: "center" }}
      >
        <span style={{ color: "#fff", fontSize: "45px" }}>
          곡괭이질 : {count}
        </span>
        &nbsp;
        <button onClick={mining}>채굴하기</button>
      </div>
      <div className="reward" ref={rewardTarget}>
        채굴성공~!
      </div>
    </div>
  );
};

export default Mine;
