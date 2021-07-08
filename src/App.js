import "./App.css";
import React, { useState } from "react";
import FunctionDifferentClass from "./components/functionDifferentClass";
import LayoutEffectDifferentEffect from "./components/layoutDifferentEffect";
import Runtime from "./components/layoutDifferentEffect/Runtime.jsx";
import Timer from "./components/Timer";
import TimerClear from "./components/TimerClear";
import OutDefine from "./components/outDefine";
import LastValue from "./components/lastValue";
import "jquery";
const App = () => {
  return (
    <div>
      {/* <FunctionDifferentClass /> */}
      <hr />
      {/* <LayoutEffectDifferentEffect /> */}
      {/* <Runtime /> */}
      <hr />
      {/* <Timer /> */}
      <hr />
      <TimerClear />
      <hr />
      {/* <OutDefine /> */}
      <hr />
      {/* <LastValue /> */}
    </div>
  );
};

export default App;
