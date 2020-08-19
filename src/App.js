import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Container from "./components/Container"
import Portfolio from "./pages/Portfolio"
import { PortfolioProvider } from "./utils/GlobalState"
import About from "./pages/About"

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
      </PortfolioProvider>
    </Router>
  );
}

export default App;