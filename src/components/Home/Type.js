import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Sophomore IIT Ropar",
          "Software Developer",
          "Electrical Engineer",
          "FrontEnd Developer",
          "Student-Rep CDPC Cell",
          "Mentor ISMP",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
