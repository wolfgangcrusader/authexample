import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
 
  const data = localStorage.getItem("user");
  const [user, SetUser] = useState(JSON.parse(data));
  const [avatar, setAvatar] = useState([]);

  //img in database
  useEffect(() => {
  axios.get(`http://localhost:4000/teacherlist/${localStorage.getItem('userID')}`)
      .then(res => {
        setAvatar(res.data)
        console.log(res.data)
      })
  }, [])

  //img not in database
  const profile_pic = `/images/${localStorage.getItem('userID')}.png`;
if (!user) {
  <div style={{ 'textAlign' : 'center'}}>
      <h1>UNABLE TO DISPLAY UNTIL YOU LOG IN</h1>
      <img style={{width: '50%'}} src="https://media2.giphy.com/media/g7GKcSzwQfugw/200.gif" />
      </div>
} else {
  return (
    <div style={{ textAlign : "center" }}>
       <img style={{width: "50%"}} src={avatar.profile_pic} alt="Avatar"/>
      <h1> Welcome {user.name}</h1>
      <h2>Email: {user.Email}</h2>
      <h2>Teacher ID: {user.TeacherID}</h2>
    </div>
  );
}}

 
