import { useState } from "react";
import rocketBigLight from "../resources/rocket1big.png";
import rocketSmallLight from "../resources/rocket-light-small-1.png";

import Mail from "./Mail";
import Timer from "./Timer";
import Live from "./Live";

export default function Launch() {
  const [isTimeOver, setIsTimeOver] = useState(false);
  const deadline = new Date().setHours(17, 24, 0); // Set your deadline date and time

  return (
    <div className="container">
      {isTimeOver ? (
        <Live />
      ) : (
        <>
          <div className="heading">
            <h2>
              <span className="icon-big">
                <img src={rocketBigLight} alt="rocket-icon" />
              </span>
              Launching New Module Soon!
              <span className="icon-small">
                <img src={rocketSmallLight} alt="rocket-icon" />
              </span>
            </h2>

            <p>
              Exciting things are in the works! We're currently{" "}
              <strong>Crafting a new </strong>
              feature for you. <br /> Keep an eye out for updates – We're
              working to make it available soon!
            </p>
          </div>

          <h3 className="ready-text">GET READY FOR THE REVEAL!</h3>
          <Timer deadline={deadline} setIsTimeOver={setIsTimeOver} />

          <Mail />
        </>
      )}
    </div>
  );
}
