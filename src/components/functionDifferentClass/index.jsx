import React, { useState } from "react";
import FunctionDemo from "./FunctionDemo";
import ClassDemo from "./ClassDemo";

const FunctionDifferentClass = () => {
    const [user, setUser] = useState("Dan");
    return (
        <>
            <div>
                <label>
                    <select value={user} onChange={(e) => setUser(e.target.value)}>
                        <option value="Dan">小明</option>
                        <option value="Sophie">小红</option>
                        <option value="Sunil">小华</option>
                    </select>
                </label>
                <p>
                    <FunctionDemo user={user} />
                    <b> (function)</b>s
                </p>
                <p>
                    <ClassDemo user={user} />
                    <b> (class)</b>
                </p>
            </div>
        </>
    );
};

export default FunctionDifferentClass;