import React, { useState } from "react";
import FunctionDemo from "./FunctionDemo";
import ClassDemo from "./ClassDemo";

const FunctionDifferentClass = () => {
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
                    <b> (function)</b>s
                </p>
                <p>
                    <ClassDemo user={user} />
                    <b> (class)</b>
                </p>
                <p>Can you spot the difference in the behavior?</p>
            </div>
        </>
    );
};

export default FunctionDifferentClass;