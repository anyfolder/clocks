import React, { useEffect, useState } from "react";
import "./clock.scss";

const Clock: React.FC<{ diff: number }> = (props) => {
  const { diff } = props;
  const [position, setPosition] = useState(diff);
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((old) => (old + 1) % 60);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="clock">
        <div
          className="hand"
          style={{
            transform: `rotateZ(${position * 6}deg)`,
          }}
        >
          <div className="visible-half"></div>
          <div className="invisible-half"></div>
        </div>
      </div>
      <div className="diff">{"+ " + diff}</div>
    </>
  );
};

export default Clock;
