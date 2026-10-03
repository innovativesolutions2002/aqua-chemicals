import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle, ArrowRight, MessageCircle, Maximize, Ruler, Palette } from 'lucide-react';

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "919414067366";

// --- DATA ---
const productRange = [
    "Non woven geo textile based on polypropylene and polyester",
    "Non woven water proofing membrane",
    "Non woven needle punch felt",
    "Non woven dust collecting bags cloth",
    "Non woven shoe lining",
    "Non woven interlining",
    "Non woven speaker felt",
    "Non woven car automotives",
    "Non woven air filter",
    "Non woven filter media for Effluent treatment plant",
    "Non woven separation membrane",
    "Non woven spun bond (15+ colors)",
    "Non woven wadding (chemical/thermal bonded)"
];

const applications = [
    "Road and highway construction",
    "Railway and track-bed applications",
    "Drainage systems",
    "Landfill and waste-management projects",
    "Soil stabilization and separation",
    "Erosion control",
    "Canal and water-management projects",
    "Retaining walls and foundation systems",
    "Filtration and drainage layers"
];

const features = [
    "Excellent filtration and drainage properties",
    "Effective separation of soil and aggregate layers",
    "High resistance to puncture and tearing",
    "Good dimensional stability and durability",
    "Helps prevent soil migration and erosion",
    "Suitable for demanding infrastructure applications",
    "Customized GSM and width requirements"
];

const specifications = [
    { label: "GSM Range", value: "100 GSM to 1000 GSM", icon: <Ruler className="w-5 h-5" /> },
    { label: "Width", value: "1.52m to 7.0m", icon: <Maximize className="w-5 h-5" /> },
    { label: "Colors", value: "White, Grey, Black", icon: <Palette className="w-5 h-5" /> },
    { label: "Material", value: "Polyester (PET) / Polypropylene (PP)", icon: <Layers className="w-5 h-5" /> },
];

// Placeholder images representing geotextiles/fabrics
const galleryImages = [
    { src: "https://cpimg.tistatic.com/11985385/b/4/nonwoven-geotextile-fabric.png", alt: "Geotextile Roll" },
    { src: "https://image.made-in-china.com/202f0j00ZdMVABfnGUzN/Nomex-Non-Woven-Fabric-Aramid-Filter-Bag-in-Dust-Collection-Bag-Filter.webp", alt: "Road Construction" },
    { src: "https://5.imimg.com/data5/SELLER/Default/2023/5/311792770/JE/HU/AB/189226316/non-woven-shoe-lining-500x500.jpeg", alt: "Industrial Fabric" },
    { src: "https://5.imimg.com/data5/SELLER/Default/2025/5/514082157/NR/OY/LQ/661642/non-woven-car-automotive-felt.jpeg", alt: "Construction Site" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutWi0dq4F3-THH_YW38p_PP2Ux5HnZOuU58NzzZCfh8JjV3VwwAXzznYF&s=10", alt: "Engineering" },
    { src: "https://cpimg.tistatic.com/11192337/b/4/1x10m-cut-non-woven-membrane-drainage-separation-layer-geotextile-fabric..jpg", alt: "Factory Production" },
];

export default function NonWovenProducts() {
    const handleWhatsAppOrder = (productName) => {
        const message = `Hello Aqua Chemicals, I am interested in your Non-Woven Products: *${productName}*. Please share details.`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="w-full bg-[#f0fdfa] min-h-screen pb-20"> {/* Light Teal/Cyan tint for Industrial/Fabric theme */}
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#0f766e] to-[#115e59] py-16 md:py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-molecular opacity-10"></div>
                <h1 className="text-4xl md:text-6xl font-bold text-white font-display relative z-10 drop-shadow-md flex items-center justify-center gap-4">
                    <Layers className="w-12 h-12 md:w-16 md:h-16 animate-pulse" />
                    Non Woven Products
                </h1>
                <p className="text-teal-100 mt-4 text-lg max-w-2xl mx-auto relative z-10 px-4">
                    High-quality Needle Punched Geotextiles & Industrial Fabrics
                </p>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* Intro & Specs Section */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    
                    {/* Description */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#0f766e] mb-4 flex items-center gap-2">
                            <Layers className="w-6 h-6" /> Non-Woven Geotextile
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Aqua Chemicals & Enzymes manufactures high-quality Non-Woven Geotextiles designed for a wide range of civil engineering, infrastructure, drainage, filtration, soil stabilization, and environmental applications.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our products are manufactured using premium-quality <strong>Polyester (PET)</strong> and <strong>Polypropylene (PP)</strong> fibers, offering excellent filtration, drainage, separation, and protection properties. Engineered for consistent quality and high durability under demanding site conditions.
                        </p>
                    </div>

                    {/* Quick Specs Card */}
                    <div className="bg-[#0f766e] rounded-xl shadow-lg p-8 text-white flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">Product Specifications</h3>
                        <div className="space-y-4">
                            {specifications.map((spec, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="mt-1 text-teal-300">{spec.icon}</div>
                                    <div>
                                        <div className="text-xs text-teal-200 uppercase tracking-wide font-semibold">{spec.label}</div>
                                        <div className="font-medium">{spec.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button 
                            onClick={() => handleWhatsAppOrder("Geotextile Specifications")}
                            className="mt-8 w-full bg-white text-[#0f766e] py-3 rounded-lg font-bold hover:bg-teal-50 transition flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" /> Request Specs
                        </button>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#115e59] mb-8 text-center">Product Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((img, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="relative group overflow-hidden rounded-xl shadow-md aspect-[4/3]"
                            >
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Features & Applications Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    
                    {/* Key Features */}
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                        <h3 className="text-xl font-bold text-[#115e59] mb-6">Key Features</h3>
                        <ul className="space-y-3">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Applications */}
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                        <h3 className="text-xl font-bold text-[#115e59] mb-6">Applications</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {applications.map((app, idx) => (
                                <div key={idx} className="flex items-center gap-2 p-3 bg-teal-50 rounded-lg border border-teal-100">
                                    <ArrowRight className="w-4 h-4 text-teal-600" />
                                    <span className="text-sm font-medium text-teal-900">{app}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Full Product Range List */}
                <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 mb-12">
                    <h3 className="text-2xl font-bold text-[#115e59] mb-6 text-center">Complete Product Range</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {productRange.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-teal-50 hover:shadow-md transition group border border-gray-100"
                            >
                                <span className="text-gray-700 font-medium group-hover:text-teal-800">{item}</span>
                                <button 
                                    onClick={() => handleWhatsAppOrder(item)}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity text-teal-600 hover:text-teal-800"
                                    title="Inquire about this product"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                     <button 
                        onClick={() => handleWhatsAppOrder("General Non-Woven Inquiry")}
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition shadow-lg text-lg"
                    >
                        Chat on WhatsApp for Bulk Orders <MessageCircle className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </div>
    );
}