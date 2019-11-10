import React, { useMemo } from "react";
import ReactStopwatch from "react-stopwatch";
import Stopwatch from "./Stopwatch";

const Score = props => {
  // using useMemo hook to prevent re render for the stopwatch
  const stopwatch = useMemo(() => {
    return <Stopwatch />;
  }, []);

  return (
    <div>
      {stopwatch}
      <h4 className="text-danger">Penalties: {props.penalty}s</h4>
    </div>
  );
};

export default Score;
