import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Container from "./components/Container"
import Portfolio from "./pages/Portfolio"
import { PortfolioProvider } from "./utils/GlobalState"
import About from "./pages/About"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <PortfolioProvider>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route component={Portfolio} />
          </Switch>
        </Container>
        <Footer/>
      </PortfolioProvider>
    </Router>
  );
}

export default App;