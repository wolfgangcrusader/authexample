import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
    const [user, SetUser] = useState([]);

    useEffect(() => {
    SetUser(localStorage.getItem('user'))
    })

    if (!user) {
      return (
      <div style={{ 'textAlign' : 'center'}}>
      <h1>UNABLE TO DISPLAY UNTIL YOU LOG IN</h1>
      <img style={{width: '50%'}} src="https://media2.giphy.com/media/g7GKcSzwQfugw/200.gif" />
      </div>
      )
    } else {
    return <Outlet/>
    }
}

export default PrivateRoute;