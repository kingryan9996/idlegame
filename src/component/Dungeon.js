import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Dungeon = () => {
  return (
    <div className="page-layout dungeon-page">
      이곳은 던전입니다.
      <Link to="/">
        <div className="Village-enter dungeon-vil">마을로 이동</div>
      </Link>
    </div>
  );
};

export default Dungeon;
