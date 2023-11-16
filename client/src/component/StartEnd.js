// StartEnd.js
import React from "react";
import { Link } from "react-router-dom";

const StartEnd = (props) => {
  const btn = {
    display: "block",
    padding: "21px",
    margin: "7px",
    minWidth: "max-content",
    textAlign: "center",
    width: "333px",
    alignSelf: "center",
    border: "none",
    borderRadius: "30px",
    fontSize: "1.2em",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#007bff",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div className="container-main">
      {!props.elStarted ? (
        <>
          {/* Edit here to display the Start Election Again button */}
          {!props.elEnded ? (
            <>
              <div className="start-btn">
                <button type="submit" style={btn}>
                  Start Election {props.elEnded ? "Again" : null}
                </button>
              </div>
            </>
          ) : (
            <div className="container-item">
              <center>
                <p>Re-deploy the contract to start the election again.</p>
              </center>
            </div>
          )}
          {props.elEnded ? (
            <div className="container-item">
              <center>
                <p>The election has ended.</p>
              </center>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="container-item">
            <center>
              <p>The election has started.</p>
            </center>
          </div>
          <div className="container-item">
            <button
              type="button"
              onClick={props.endElFn}
              style={btn}
            >
              End Election
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StartEnd;
