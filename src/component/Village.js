import React from "react";
import { Link } from "react-router-dom";

const Village = () => {
  return (
    <div className="page-layout village-page">
      <div>여기는 Vilage입니다.</div>
      <Link to="/Dungeon" className="front-link dungeon-link">
        던전으로 이동
      </Link>
      <br />
      <Link to="/Mine" className="front-link mine-link">
        광산으로 이동
      </Link>
      <br />
      <Link to="/River" className="front-link river-link">
        낚시터로 이동
      </Link>
    </div>
  );
};

export default Village;
