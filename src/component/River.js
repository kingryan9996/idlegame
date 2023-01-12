import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const River = () => {
  return (
    <div className="page-layout river-page">
      이곳은 낚시터입니다.
      <Link to="/">
        <div className="Village-enter river-vil">마을로 이동</div>
      </Link>
    </div>
  );
};

export default River;
