import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function NavBar() {
  const [user, setUser] = useState(false);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  const handleLogin = () => {
//FOR INTEGRATION WITH BACKEND//

    axios.post('/login', {
      email: email,
      password: password
    })
    .then((response) => {
    setUser(response.data);
    })
    .catch((error) => {
      console.log(error)
    })

    let tempuser = {name: "John Marsden", TeacherID: 1, Email: "jmarsden@gmail.com"};
    localStorage.setItem("userID", (tempuser.TeacherID));
    localStorage.setItem("user", JSON.stringify(tempuser));
    window.location.href = "/dashboard";
  };

  const handleLogout = () => {
    setUser(false);
    localStorage.removeItem("user");
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
    <div
      style={{
        display: "flex",
        "flex-direction": "row",
        justifyContent: "space-evenly",
        "font-size": "2em",
        backgroundColor: "beige",
        padding: "2%",
      }}
    >
      <Link to="/">Home</Link>
      <br />
      <Link to="dashboard">Dashboard</Link>
      <div>
        {user ? (
          <button onClick={handleLogout}>Sign Out</button>
        ) : (
          <button onClick={handleShow}>LOGIN | REGISTER</button>
        )}     
      </div>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <button onClick={handleLogin}>LOGIN</button>
      </Modal>
    </>
  );
}

export default NavBar;
