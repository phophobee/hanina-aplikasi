import React, { useContext, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Product from './components/OurProduct';
import Features from './components/Features';
import Tutorials from './components/Tutorial';
import Prices from './components/Prices';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

import { UserContext } from './context/UserContext'; // <- tambahkan ini

function App() {
  const location = useLocation();
  const { scrollTarget, setScrollTarget } = useContext(UserContext); // <- context digunakan

  // Refs ke masing-masing bagian
  const productRef = useRef(null);
  const featureRef = useRef(null);
  const tutorRef = useRef(null);
  const priceRef = useRef(null);
  const testimonialRef = useRef(null);
  const footerRef = useRef(null);

  // Scroll otomatis saat scrollTarget berubah
  useEffect(() => {
    if (!scrollTarget) return;

    const refs = {
      'our product': productRef,
      'features': featureRef,
      'tutorial': tutorRef,
      'our customer': testimonialRef,
      'prices': priceRef,
      'contact us': footerRef,
    };

    const sectionRef = refs[scrollTarget.toLowerCase()];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollTarget(null); // reset agar tidak scroll ulang
    }
  }, [scrollTarget, setScrollTarget]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div ref={productRef}><Product /></div>
              <div ref={featureRef}><Features /></div>
              <div ref={priceRef}><Prices /></div>
              <div ref={tutorRef}><Tutorials /></div>
              <div ref={testimonialRef}><Testimonial /></div>
              <div ref={footerRef}><Footer /></div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
