import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/privateRoute";


function App() {
  
  return (
    <>
      <Router> 
        <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
