import React, { useRef, useEffect } from "react";

const Console = ({ logs }) => {
  const consoleRef = useRef(null);

  // Auto-scroll to the bottom
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="console-container">
      <h3>Console</h3>
      <textarea
        id="console-textarea"
        className="form-control"
        value={logs.join("\n")}
        readOnly
        ref={consoleRef}
      ></textarea>
    </div>
  );
};

export default Console;
