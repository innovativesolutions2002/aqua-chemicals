import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Fetch products from Render API
    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL;

        fetch(`${API_URL}/api/products`)
            .then((r) => {
                if (!r.ok) {
                    throw new Error(`API Error: ${r.status}`);
                }
                return r.json();
            })
            .then((data) => {
                setProducts(
                    data.sort((a, b) => a.sortOrder - b.sortOrder)
                );
            })
            .catch((err) => {
                console.error("Failed to fetch navbar products:", err);
            });
    }, []);

    const navLinks = [
        { to: '/about', label: 'ABOUT US' },
        { to: '/reseller', label: 'RESELLER' },
        { to: '/contact', label: 'CONTACT' },
    ];

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#032b44]/90 border-b border-white/10 w-full shadow-lg">
            {/* Top Bar Info */}
            <div className="bg-[#021f33] text-xs text-gray-300 py-2 px-6 lg:px-12 flex justify-between items-center w-full">
                <span>Mon - Sat 9am - 7pm</span>
                <span className="flex items-center gap-2">
                    <span className="text-chem-400">📞</span> Tel No. +91-9414067366
                </span>
            </div>

            {/* Main Nav */}
            <div className="w-full px-6 lg:px-12">
                <div className="flex items-center justify-between h-24">
                    
                    {/* LOGO */}
                    <Link to="/" className="flex items-center group">
                        <img 
                            src="/logo.png" 
                            alt="Aqua Chemicals & Enzymes" 
                            className="h-16 md:h-20 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                        
                        {/* HOME */}
                        <NavLink to="/" className={({isActive}) => `text-sm font-bold tracking-wide transition ${isActive ? 'text-chem-400' : 'text-white hover:text-chem-400'}`}>
                            HOME
                        </NavLink>

                        {/* PRODUCTS DROPDOWN (HOVER per PDF) */}
                        <div 
                            className="relative group"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 text-sm font-bold tracking-wide text-white hover:text-chem-400 transition py-2">
                                PRODUCTS <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-72 bg-[#032b44] border border-white/10 rounded-lg shadow-2xl overflow-hidden p-2 ring-1 ring-chem-500/20"
                                    >
                                        {products.map((p) => {
                                            // Check if product has an external link (e.g., FMCG)
                                            const isExternal = !!p.externalLink;
                                            
                                            // Use 'a' tag for external links, 'Link' for internal routes
                                            const LinkComponent = isExternal ? 'a' : Link;
                                            
                                            // Props for external vs internal
                                            const linkProps = isExternal 
                                                ? { href: p.externalLink, target: "_blank", rel: "noopener noreferrer" } 
                                                : { to: `/products/${p.slug}` };

                                            return (
                                                <LinkComponent 
                                                    key={p._id} 
                                                    {...linkProps}
                                                    className="block px-4 py-3 rounded-md hover:bg-white/10 text-gray-200 hover:text-chem-400 transition text-sm font-medium border-b border-white/5 last:border-0"
                                                >
                                                    {p.name}
                                                </LinkComponent>
                                            );
                                        })}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* OTHER LINKS */}
                        {navLinks.map(link => (
                            <NavLink key={link.label} to={link.to}
                                className={({isActive}) => `text-sm font-bold tracking-wide transition ${isActive ? 'text-chem-400' : 'text-white hover:text-chem-400'}`}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-white">
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (CLICK per PDF) */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: 'auto', opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-[#032b44] border-b border-white/10 overflow-hidden w-full"
                    >
                        <div className="px-6 py-6 space-y-4 flex flex-col">
                            <NavLink to="/" onClick={() => setMobileOpen(false)} className="text-white font-bold py-2 border-b border-white/10">HOME</NavLink>
                            
                            {/* Mobile Products Accordion */}
                            <div className="border-b border-white/10 pb-2">
                                <button onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center justify-between w-full text-left font-bold text-white py-2">
                                    PRODUCTS <ChevronDown className={`w-4 h-4 transition ${dropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {dropdownOpen && (
                                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden pl-4 mt-2 space-y-2">
                                            {products.map((p) => {
                                                const isExternal = !!p.externalLink;
                                                const LinkComponent = isExternal ? 'a' : Link;
                                                const linkProps = isExternal 
                                                    ? { href: p.externalLink, target: "_blank", rel: "noopener noreferrer" } 
                                                    : { to: `/products/${p.slug}` };

                                                return (
                                                    <LinkComponent 
                                                        key={p._id} 
                                                        {...linkProps}
                                                        // Only close mobile menu if it's an internal link
                                                        onClick={() => !isExternal && setMobileOpen(false)}
                                                        className="block text-sm text-gray-300 hover:text-chem-400 py-1"
                                                    >
                                                        • {p.name}
                                                    </LinkComponent>
                                                );
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {navLinks.map(link => (
                                <NavLink key={link.label} to={link.to} onClick={() => setMobileOpen(false)}
                                    className="text-white font-bold py-2 border-b border-white/10 block">
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}