import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SiteLayout from "./components/layout/SiteLayout";
import PageNotFound from "./lib/PageNotFound";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Gallery from "./pages/Gallery";

import Kitchens from "./pages/services/Kitchens";
import Bathrooms from "./pages/services/Bathrooms";
import Patios from "./pages/services/Patios";
import Roofing from "./pages/services/Roofing";
import Windows from "./pages/services/Windows";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services/kitchens" element={<Kitchens />} />
          <Route path="/services/bathrooms" element={<Bathrooms />} />
          <Route path="/services/patios" element={<Patios />} />
          <Route path="/services/roofing" element={<Roofing />} />
          <Route path="/services/windows" element={<Windows />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Toaster />
    </Router>
  );
}

export default App;


