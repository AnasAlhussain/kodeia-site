import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import Services from "./pages/Services";
import ServiceWebb from "./pages/services/ServiceWebb";
import ServiceEducation from "./pages/services/ServiceEducation";
import ServiceYH from "./pages/services/ServiceYH";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/om-oss" element={<About />} />
        <Route path="/tjanster" element={<Services />} />
        <Route path="/tjanster/webb" element={<ServiceWebb />} />
        <Route path="/tjanster/utbildningar" element={<ServiceEducation />} />
        <Route path="/tjanster/yh-stod" element={<ServiceYH />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/tack" element={<Thanks />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
