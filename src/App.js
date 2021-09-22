import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const Map = () => (
  <div>
    <h2>Map</h2>
  </div>
);
const Covid19 = () => (
  <div>
    <h2>API Covid19</h2>
  </div>
);

function App() {
  const [heros, setHeros] = useState([]);

  useEffect(async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/");
      const heros_data = await res.json();
      setHeros(heros_data);
      console.log(heros);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container">      
      <div className="row">
        <div className="col-3">
          <Navbar />
        </div>
        <div className="col-8">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/:id">
              <h1>Error 404</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
