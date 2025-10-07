import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/LoadingSpinner';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Transparency from './pages/Transparency';
import Donations from './pages/Donations';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

// Initialize i18n
import './lib/i18n';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="transparency" element={<Transparency />} />
              <Route path="donations" element={<Donations />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<Post />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;