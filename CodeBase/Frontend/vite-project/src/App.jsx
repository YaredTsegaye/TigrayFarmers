import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Project from "./Pages/ProjectCollection.jsx";
import DonationCollection from "./Pages/DonationCollection.jsx";
import Blog from "./Pages/BlogCollection.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ProjectCollection" element={<Project />} />
        <Route path="/donation" element={<DonationCollection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
