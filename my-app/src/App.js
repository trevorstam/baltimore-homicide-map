import React from "react";

import Header from "./components/header/header";
import Canvas from "./components/map/map-canvas";
import Footer from "./components/footer/footer";

class App extends React.Component {
  render() {
    return ( 
      <React.Fragment >
      <Header/>
      <Canvas/>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default App;

