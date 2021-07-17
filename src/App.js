import React from "react";
import { Route, Link } from "wouter";
import ListOfGifs from "./components/ListOfGifs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">gif de pandas</Link>
        <Link to="/gif/colombia">gif de colombia</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
