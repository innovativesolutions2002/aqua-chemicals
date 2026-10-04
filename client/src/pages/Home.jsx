import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Dna, Layers, ArrowRight, Beaker, TestTube, ChevronRight, FileText, Factory, Leaf, Droplets, ShoppingBag } from 'lucide-react';

const iconMap = { FlaskConical, Dna, Layers,ShoppingBag };

// --- SLIDER DATA ---
const slides = [
    {
        id: 1,
        image: "/lab.jpg", // Lab/Chemicals
        icon: <FlaskConical className="w-12 h-12 md:w-16 md:h-16 text-white" />,
        label: "Chemical Solutions"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Microscope/Enzymes
        icon: <Dna className="w-12 h-12 md:w-16 md:h-16 text-white" />,
        label: "Industrial Enzymes"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Factory/Geotextile
        icon: <Layers className="w-12 h-12 md:w-16 md:h-16 text-white" />,
        label: "Non Woven Geotextiles"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        icon: <Droplets className="w-12 h-12 md:w-16 md:h-16 text-white" />,
        label: "Water Treatment"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Industry
        icon: <Factory className="w-12 h-12 md:w-16 md:h-16 text-white" />,
        label: "Process Industry"
    }
];

export default function Home() {
    const [products, setProducts] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Fetch Products
    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL;

        fetch(`${API_URL}/api/products`)
            .then(r => {
                if (!r.ok) {
                    throw new Error(`API Error: ${r.status}`);
                }
                return r.json();
            })
            .then(data => {
                 setProducts(
                  data.sort((a, b) => a.sortOrder - b.sortOrder)
             );
             })
            .catch(err => {
                console.error("Failed to fetch products:", err);
             });
    }, []);

    // Auto Slide Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full overflow-x-hidden">
            
                        {/* --- 0. MOVING CAROUSEL (Seamless Loop Fix) --- */}
            <div className="bg-teal-50 text-teal-800 py-3 overflow-hidden whitespace-nowrap relative z-30 border-b border-teal-100 flex">
                <motion.div 
                    className="flex shrink-0 items-center gap-12 px-6"
                    // Animate from 0 to -100% of THIS container's width
                    // Since we render the list TWICE inside, moving -100% of one set creates the loop
                    animate={{ x: ["0%", "-100%"] }} 
                    transition={{ 
                        repeat: Infinity, 
                        duration: 25, // Adjust speed here (higher = slower)
                        ease: "linear",
                        repeatType: "loop" // Ensures it jumps back to 0 instantly after -100%
                    }}
                >
                    {/* --- FIRST SET OF ITEMS --- */}
                    <span className="flex items-center gap-2 font-bold text-teal-700"><Droplets className="w-5 h-5" /> Water Treatment</span>
                    <span className="flex items-center gap-2 font-bold text-purple-700"><Dna className="w-5 h-5" /> Industrial Enzymes</span>
                    <span className="flex items-center gap-2 font-bold text-blue-700"><Layers className="w-5 h-5" /> Non Woven Geotextiles</span>
                    <span className="flex items-center gap-2 font-bold text-green-700"><Leaf className="w-5 h-5" /> Eco-Friendly Solutions</span>
                    <span className="flex items-center gap-2 font-bold text-orange-700"><Factory className="w-5 h-5" /> Sugar & Paper Industry</span>
                    <span className="flex items-center gap-2 font-bold text-teal-700"><FlaskConical className="w-5 h-5" /> R&D Excellence</span>

                    {/* --- SECOND SET OF ITEMS (Exact Duplicate for Seamless Loop) --- */}
                    {/* We add a large margin-left or rely on the gap to separate the end of Set 1 from start of Set 2 */}
                    <span className="flex items-center gap-2 font-bold text-teal-700 ml-12"><Droplets className="w-5 h-5" /> Water Treatment</span>
                    <span className="flex items-center gap-2 font-bold text-purple-700"><Dna className="w-5 h-5" /> Industrial Enzymes</span>
                    <span className="flex items-center gap-2 font-bold text-blue-700"><Layers className="w-5 h-5" /> Non Woven Geotextiles</span>
                    <span className="flex items-center gap-2 font-bold text-green-700"><Leaf className="w-5 h-5" /> Eco-Friendly Solutions</span>
                    <span className="flex items-center gap-2 font-bold text-orange-700"><Factory className="w-5 h-5" /> Sugar & Paper Industry</span>
                    <span className="flex items-center gap-2 font-bold text-teal-700"><FlaskConical className="w-5 h-5" /> R&D Excellence</span>
                </motion.div>
                
                {/* Optional: Second duplicate container for extra safety on very wide screens, 
                    but usually one motion.div with 2 sets is enough if width is managed correctly. 
                    The logic above: Move -100% of the content. Since content is 2x sets, 
                    when it hits -100%, the second set is exactly where the first set started. */}
            </div>

            {/* --- 1. HERO SECTION (Dynamic Slider) --- */}
            <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
                
                {/* Dynamic Background Images */}
                <AnimatePresence mode='wait'>
                    <motion.div 
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 z-0"
                    >
                        <img 
                            src={slides[currentSlide].image} 
                            alt="Slide Background" 
                            className="w-full h-full object-cover"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-[#032b44]/80 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#032b44] via-transparent to-transparent"></div>
                    </motion.div>
                </AnimatePresence>

                {/* Floating Elements - STRICTLY positioned to avoid text */}
                <div className="absolute inset-0 pointer-events-none z-10 w-full h-full overflow-hidden">
                    
                    {/* Left Element (Static Beaker) - Hidden on mobile to prevent overlap */}
                    <div className="absolute top-1/4 left-[2%] w-16 h-16 border border-chem-400/20 rounded-full animate-float items-center justify-center backdrop-blur-sm bg-white/5 hidden lg:flex">
                        <Beaker className="w-6 h-6 text-chem-300/50" />
                    </div>
                    
                    {/* Right Element (Dynamic Icon) - Changes with slide */}
                    <div className="absolute bottom-1/4 right-[2%] md:right-[5%] w-24 h-24 md:w-32 md:h-32 border border-white/20 animate-float-delayed items-center justify-center backdrop-blur-md bg-black/20 shadow-2xl hidden lg:flex"
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                        
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentSlide}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {slides[currentSlide].icon}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Content Container */}
                <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 lg:px-24 text-center md:text-left flex flex-col md:flex-row items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }}
                        className="md:w-2/3 lg:w-3/5" /* Width constrained to 60% on large screens */
                    >
                        
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 drop-shadow-xl">
                            We Create Chemicals and Enzymes <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-chem-400 to-cyan-300">Opportunities</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
                            Delivering superior quality "ECO-FRIENDLY ECONOMICAL CHEMICALS AND ENZYMES" with the highest degree of accuracy & purity.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="#products" className="bg-white text-[#032b44] px-8 py-4 rounded-md font-bold text-lg hover:bg-chem-50 transition shadow-lg hover:shadow-chem-500/20 flex items-center gap-2">
                                View Products <ArrowRight className="w-5 h-5" />
                            </a>
                            <Link to="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition backdrop-blur-sm">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                    <div className="hidden md:block md:w-1/3 lg:w-2/5"></div>
                </div>
                
                {/* Slider Indicators (Clickable) */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`rounded-full transition-all duration-300 ${
                                currentSlide === index 
                                    ? "w-8 h-2 bg-chem-500" 
                                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                            }`}
                        />
                    ))}
                </div>
            </section>

            {/* --- 2. MISSION SECTION --- */}
            <section className="py-20 md:py-32 bg-white relative w-full">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-24 relative z-10">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
                        <div className="lg:w-3/4">
                            <h2 className="text-[#032b44] font-display text-3xl md:text-5xl font-bold mb-8 tracking-tight">MISSION</h2>
                            <p className="text-gray-600 text-lg md:text-2xl leading-relaxed font-light">
                                To re-invent & deliver the dues back to Mother Nature, with superior quality <span className="font-bold text-[#032b44]">"ECO-FRIENDLY ECONOMICAL CHEMICALS AND ENZYMES"</span>, manufactured with the highest degree of accuracy & purity, to deliver the best some real time results.
                            </p>
                        </div>
                        <div className="lg:w-1/4 flex lg:justify-end w-full">
                             <Link to="/about" className="bg-[#2daae1] hover:bg-[#032b44] text-white px-10 py-4 rounded shadow-lg transition duration-300 font-bold text-lg w-full lg:w-auto text-center">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

                        {/* --- 3. PRODUCTS SECTION (Updated - Full Card Clickable) --- */}
             <section id="products" className="py-24 md:py-32 relative w-full bg-[#032b44]">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-24">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">Our Products</h2>
                        <div className="w-24 h-1 bg-chem-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8"> {/* Changed to 4 columns */}
                        {products.map((product, index) => {
                            const Icon = iconMap[product.icon] || FlaskConical;
                            
                            // Determine if it's an external link (FMCG) or internal route
                            const isExternal = !!product.externalLink;
                            const linkProps = isExternal 
                                ? { href: product.externalLink, target: "_blank", rel: "noopener noreferrer" } 
                                : { to: `/products/${product.slug}` };
                            
                            // Use 'a' tag for external, 'Link' for internal
                            const CardWrapper = isExternal ? 'a' : Link;

                            return (
                                <CardWrapper 
                                    key={product._id}
                                    {...linkProps}
                                    className="group block h-full"
                                >
                                    <motion.div 
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-8 hover:bg-white/10 hover:border-chem-500/50 transition-all duration-300 h-full flex flex-col backdrop-blur-sm cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-chem-500/10"
                                    >
                                        <div className="w-16 h-16 rounded-xl bg-[#021f33] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                            <Icon className="w-8 h-8 text-chem-400" />
                                        </div>
                                        
                                        <h3 className="font-display text-2xl font-bold mb-4 text-white group-hover:text-chem-400 transition-colors">
                                            {product.name}
                                        </h3>
                                        
                                        <p className="text-gray-400 leading-relaxed mb-8 flex-grow text-lg">
                                            {product.description}
                                        </p>
                                        
                                        <div className="inline-flex items-center text-chem-400 font-bold group-hover:text-white transition mt-auto">
                                            {isExternal ? 'Visit Website' : 'Explore Details'} 
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                                        </div>
                                    </motion.div>
                                </CardWrapper>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* --- 4. OUR ORGANIZATION SECTION --- */}
            <section className="py-24 bg-white w-full">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#032b44] mb-4">Our Organization</h2>
                        <p className="text-gray-500 text-lg tracking-wide uppercase">Eco-Friendly Economical Chemicals and enzymes</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p>
                                Aqua Chemicals and Enzymes came into existence in the year 1993, when a bunch of talented & professional engineers came together to deliver niche quality chemicals and enzymes to small & medium sized chemical and enzymes consumers. On a mission to provide quality products & services, these young entrepreneurs left no stone unturned to LIVE their dream of manufacturing <strong>"ECO-FRIENDLY ECONOMICAL CHEMICALS AND ENZYMES"</strong>.
                            </p>
                            <p>
                                With the passage of time, the size & spectrum of this company's operations increased multiple levels, reflecting their excellence in the Industry, along with the trust bestowed by their consumers on the products & services coming from the stable of AQUA CHEMICALS AND ENZYMES.
                            </p>
                            <p>
                                Unlike other players, Aqua Chemicals and Enzymes didn't restricted themselves only to the commercial activities; but they also became one of the First Movers in Indian History* to establish the practice of eco-friendly manufacturing processes of water chemicals & environmental protection thereon.
                            </p>

                            <ul className="space-y-4 pt-4">
                                {[
                                    "Complete range of water treatment chemicals",
                                    "Complete range of Enzymes",
                                    "R.O. Chemicals Pretreatment/Post Treatment/ Anti Scalant and Cleaning agents",
                                    "Poly Electrolyte Chemicals",
                                    "Complete range of non woven needle punch fabric"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full border border-chem-500 flex items-center justify-center shrink-0">
                                            <ChevronRight className="w-4 h-4 text-chem-500" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-chem-100 rounded-2xl transform rotate-3 opacity-50"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                alt="Lab Scientists" 
                                className="relative rounded-xl shadow-2xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

                        
                        {/* --- 5. CERTIFICATIONS & DOWNLOADS SECTION (Updated with Clickable Certs) --- */}
            <section className="py-24 bg-[#2daae1] w-full relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-[1600px] mx-auto px-6 lg:px-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left: Certifications List */}
                        <div className="text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-snug">
                                For our commendable performance in the industry,<br/>
                                we have been accredited with the following certifications:
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { name: "FOOD SAFETY SYSTEM CERTIFICATION", link: "/FSSC.pdf" },
                                    { name: " ORGANIC", link: "/ORGANIC.pdf" },
                                   
                                    { name: "ISO 9001:2015 ", link: "/ISO 9001.pdf" }, 
                                    { name: "ISO 14001:2015", link: "/ISO 14001.pdf" },
                                    { name: "BRC Compliance", link: "/ISO BRC.pdf" },
                                    { name: "HALAL CERTIFICATION", link: "/HALAL CERTIFICATION.jpeg" },
                                    { name: "KOSHER CERTIFICATION", link: "/KOSHER CERTIFICATION.jpeg" },
                                    { name: "ISO 14001:2015", link: "/ISO-Certifate.pdf" },
                                ].map((cert, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-lg md:text-xl font-medium group">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                                            <ChevronRight className="w-5 h-5 text-white" />
                                        </div>
                                        
                                        {cert.link ? (
                                            <a 
                                                href={cert.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="hover:text-chem-200 hover:underline decoration-2 underline-offset-4 transition-all flex items-center gap-2"
                                            >
                                                {cert.name}
                                                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                                    View Cert
                                                </span>
                                            </a>
                                        ) : (
                                            <span>{cert.name}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* Right: PDF Downloads with Custom Icons */}
                        <div className="grid grid-cols-2 gap-8 justify-items-center">
                            
                            {/* PDF 1: Bio-Culture (ETP/STP) */}
                            <div className="flex flex-col items-center group cursor-pointer">
                                <a href="/01.pdf" target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300 mb-4 relative overflow-hidden border-4 border-transparent group-hover:border-chem-400/30">
                                        {/* Modern Gradient Background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-80"></div>
                                        
                                        {/* Custom Molecular Icon */}
                                        <div className="relative z-10 text-[#032b44]">
                                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <path d="M12 18v-6"></path>
                                                <path d="M9 15l3-3 3 3"></path>
                                                <circle cx="12" cy="12" r="1" fill="currentColor"></circle>
                                            </svg>
                                        </div>
                                        
                                        {/* Hover Glow Ring */}
                                        <div className="absolute inset-0 rounded-full border-2 border-chem-500/0 group-hover:border-chem-500/50 transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100"></div>
                                    </div>
                                    <div className="bg-[#032b44] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg group-hover:bg-chem-600 transition-colors flex items-center gap-2">
                                        <Droplets className="w-4 h-4" /> Bio-Culture
                                    </div>
                                </a>
                            </div>

                            {/* PDF 2: Product Brochure */}
                            <div className="flex flex-col items-center group cursor-pointer">
                                <a href="/02.pdf" target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300 mb-4 relative overflow-hidden border-4 border-transparent group-hover:border-cyan-400/30">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-cyan-50 opacity-80"></div>
                                        
                                        {/* Custom Hexagon Document Icon */}
                                        <div className="relative z-10 text-[#032b44]">
                                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <path d="M12 11l2.5 1.5v3L12 17l-2.5-1.5v-3L12 11z"></path>
                                            </svg>
                                        </div>

                                        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100"></div>
                                    </div>
                                    <div className="bg-[#032b44] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg group-hover:bg-cyan-600 transition-colors flex items-center gap-2">
                                        <Layers className="w-4 h-4" /> Brochure
                                    </div>
                                </a>
                            </div>

                            {/* PDF 3: Enzymes */}
                            <div className="col-span-2 flex justify-center mt-4 lg:mt-0">
                                <div className="flex flex-col items-center group cursor-pointer">
                                    <a href="/ENZYMES.pdf" target="_blank" rel="noopener noreferrer" className="block">
                                        <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300 mb-4 relative overflow-hidden border-4 border-transparent group-hover:border-purple-400/30">
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-purple-50 opacity-80"></div>
                                            
                                            {/* Custom DNA Document Icon */}
                                            <div className="relative z-10 text-[#032b44]">
                                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                    <polyline points="14 2 14 8 20 8"></polyline>
                                                    <path d="M10 12c0-1.5 1-2.5 2-2.5s2 1 2 2.5-1 2.5-2 2.5-2 1-2 2.5 1 2.5 2 2.5"></path>
                                                    <path d="M14 12c0 1.5-1 2.5-2 2.5s-2-1-2-2.5 1-2.5 2-2.5 2-1 2-2.5-1-2.5-2-2.5"></path>
                                                </svg>
                                            </div>

                                            <div className="absolute inset-0 rounded-full border-2 border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100"></div>
                                        </div>
                                        <div className="bg-[#032b44] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg group-hover:bg-purple-600 transition-colors flex items-center gap-2">
                                            <Dna className="w-4 h-4" /> Enzymes
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}