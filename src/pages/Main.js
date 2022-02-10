import React from 'react';
import Desktop from "../screens/Desktop";
import {isDesktop} from "react-device-detect";
import Mobile from "../screens/Mobile";

const Main = () => {
  return (
    <>
      {!(isDesktop) ? <Mobile/> : <Desktop/>}
    </>
  );
};

export default Main;