import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Home } from '@/app/pages/Home';
import { About } from '@/app/pages/About';
import { Academics } from '@/app/pages/Academics';
import { Facilities } from '@/app/pages/Facilities';
import { Admissions } from '@/app/pages/Admissions';
import { Contact } from '@/app/pages/Contact';
import { Faculty } from '@/app/pages/Faculty';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}