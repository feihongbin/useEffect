import "./App.css";
import React, { useState } from "react";
import FunctionDemo from "./components/FunctionDemo";
import ClassDemo from "./components/ClassDemo";
import Timer from "./components/Timer";
const App = () => {
  const [user, setUser] = useState("Dan");
  return (
    <>
      <div>
        <label>
          <b>Choose profile to view: </b>
          <select value={user} onChange={(e) => setUser(e.target.value)}>
            <option value="Dan">Dan</option>
            <option value="Sophie">Sophie</option>
            <option value="Sunil">Sunil</option>
          </select>
        </label>
        <h1>Welcome to {user}’s profile!</h1>
        <p>
          <FunctionDemo user={user} />
          <b> (function)</b>
        </p>
        <p>
          <ClassDemo user={user} />
          <b> (class)</b>
        </p>
        <p>Can you spot the difference in the behavior?</p>
      </div>
      <div>
        <Timer />
      </div>
    </>
  );
};

export default App;
