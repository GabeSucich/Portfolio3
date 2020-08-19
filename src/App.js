import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from "./components/Navbar"
import Container from "./components/Container"
import Portfolio from "./pages/Portfolio"
import { PortfolioProvider } from "./utils/GlobalState"

function App() {
  return (
    <PortfolioProvider>
      <Navbar />
      <Container>

        <Portfolio />
      </Container>
    </PortfolioProvider>
  );
}

export default App;