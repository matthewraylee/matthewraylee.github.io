import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Splash, SplashScreenContainer } from "./SplashScreenElements";

const SplashScreen = () => {
  return (
    <>
      <Splash>
        <PropagateLoader
          size={10}
          color="#f6ae2d"
          speedMultiplier={0.3}
        />
      </Splash>
    </>
  );
};

export default SplashScreen;
