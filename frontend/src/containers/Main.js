import React from "react";
import {Switch, Route} from 'react-router-dom'; 
import Login from '../component/Login';
import Homepage from '../component/Homepage';

const Main = () => {
    return (
        <Switch className="main">
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Homepage} />            
        </Switch>
    );
}

export default Main;