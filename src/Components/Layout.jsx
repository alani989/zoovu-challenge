import React, { useState } from "react";
import Score from "./Score";
import MainContainer from "./MainContainer";

const Layout = () => {
  let [penalty, setPenalty] = useState(0);

  const penalize = () => {
    setPenalty((penalty += 10));
  };

  return (
    <div className="p-5">
      <div className="container">
        <Score penalty={penalty} />
      </div>
      <div className="row">
        <MainContainer penalize={penalize} />
      </div>
    </div>
  );
};

export default Layout;
