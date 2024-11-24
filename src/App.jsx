import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CollectionDisplay from "./components/CollectionDisplay";
import NavBar from "./components/NavBar";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="layout">
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection/:id" element={<CollectionDisplay />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
