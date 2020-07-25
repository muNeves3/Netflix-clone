import React from "react";
import "./App.css";

import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hey, Murilo</h1>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="Netflix originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
    </div>
  );
}

export default App;
