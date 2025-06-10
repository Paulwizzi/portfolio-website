import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileCard from "./components/ProfileCard.";
import AboutMe from "./components/AboutMe";
import ProjectsPage from "./components/ProjectsPage";
import QualificationsPage from "./components/QualificationsPage";
import ContactPage from "./components/ContactPage";

const App = () => {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileCard />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/qualification" element={<QualificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;