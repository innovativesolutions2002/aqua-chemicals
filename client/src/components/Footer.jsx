import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#021626] text-gray-400 pt-20 pb-10 w-full border-t border-white/5">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-24">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    
                    {/* Logo Column */}
                    <div className="col-span-1 md:col-span-2">
                        <img 
                            src="/logo.png" 
                            alt="Aqua Chemicals Footer Logo" 
                            className="h-20 w-auto object-contain mb-6 brightness-110"
                        />
                        <p className="text-lg leading-relaxed max-w-md">
                            Re-inventing sustainable chemistry through precision engineering and eco-friendly manufacturing processes since 1993.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 font-display">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="hover:text-chem-400 transition">Home</Link></li>
                            <li><Link to="/about" className="hover:text-chem-400 transition">About Us</Link></li>
                            <li><Link to="/reseller" className="hover:text-chem-400 transition">Reseller</Link></li>
                            <li><Link to="/contact" className="hover:text-chem-400 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 font-display">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="text-chem-500">📍</span>
                                <span>215 Vasundhara Colony,<br/>Tonk Road, Jaipur, 302018</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-chem-500">📞</span>
                                <span>+91-9414067366</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-chem-500">✉️</span>
                                <span>info@aquachemicals.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; {new Date().getFullYear()} Aqua Chemicals & Enzymes. All rights reserved.</p>
                    <p>Designed for Chemical Excellence</p>
                </div>
            </div>
        </footer>
    );
}