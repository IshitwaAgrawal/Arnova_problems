import React from "react";

const Homepage = () => {
    return (
        <div className="homepage">
            <ul>
                <li>Hello, XYZ</li>
                <li>3:45</li>
                <li>
                    <button>LOGOUT</button>
                </li>
            </ul>
            <div className="homepage__body">
                Message: <input />
                <button>SUBMIT</button>
            </div>
        </div>
    );
};

export default Homepage;