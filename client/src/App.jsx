// client/src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import WaterTreatmentChemicals from './pages/WaterTreatmentChemicals';
import Enzymes from './pages/Enzymes';
import NonWovenProducts from './pages/NonWovenProducts';
import Reseller from './pages/Reseller';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 relative overflow-x-hidden w-full">
            {/* Global Molecular Background Pattern - Fixed to cover full screen */}
            <div className="fixed inset-0 bg-molecular bg-grid pointer-events-none z-0 w-full h-full" />
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-enzyme-glow rounded-full blur-3xl pointer-events-none z-0 animate-pulse-glow" />
            
            <div className="relative z-10 flex flex-col min-h-screen w-full">
                 <ScrollToTop />
                <Navbar />
                <main className="flex-grow w-full">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/products/water-treatment-chemicals" element={<WaterTreatmentChemicals />} />
                         <Route path="/products/enzymes" element={<Enzymes />} />
                         <Route path="/products/non-woven-geotextile" element={<NonWovenProducts />} />
                         <Route path="/reseller" element={<Reseller />} />

                    </Routes>
                </main>
                <Footer />
            </div>
        </div>
    );
}

