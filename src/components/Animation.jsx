import React from "react";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

function Animation() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
     
    </>
  );
}

export default Animation;
