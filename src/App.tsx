import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/Routes";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
