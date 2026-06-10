/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Results from './components/Results';
import Targeting from './components/Targeting';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import ContactFooter from './components/ContactFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="bg-black text-white font-sans min-h-screen w-screen overflow-x-hidden flex flex-col relative selection:bg-primary-500/30 selection:text-primary-100">
       <div className="flex-1 w-full flex flex-col">
          <Hero />
          <Services />
          <Targeting />
          <Packages />
          <Results />
          <Clients />
          <Testimonials />
          <ContactFooter />
       </div>
       <FloatingWhatsApp />
    </div>
  );
}
