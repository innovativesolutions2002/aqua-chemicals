import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Dna, MessageCircle, FileText, PhoneCall, Sparkles, Pizza, Wheat, Droplet } from 'lucide-react';

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "919414067366"; 

// --- SPECIALTY ENZYMES DATA (NEW) ---
const specialtyEnzymes = [
    {
        name: "Pizzyme",
        desc: "Specialty blend for perfect pizza crust texture and rise.",
        image: "/PIZZYME.png",
        icon: <Pizza className="w-6 h-6" />
    },
    {
        name: "Khakhrazyme",
        desc: "Enhances crispiness and shelf-life of traditional khakhra.",
        image: "/khakhra.jpg", // Placeholder for flatbread/cracker
        icon: <Wheat className="w-6 h-6" />
    },
    {
        name: "Chapatti Plus",
        desc: "Keeps chapattis soft, pliable, and fresh for longer.",
        image: "/chapati.jpg", // Reusing flatbread visual
        icon: <Wheat className="w-6 h-6" />
    },
    {
        name: "Basen Improver",
        desc: "Chickpea flour enhancer for better binding and texture.",
        image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=800&q=80", // Chickpeas/flour visual
        icon: <Sparkles className="w-6 h-6" />
    },
    {
        name: "KOSO-RBO",
        desc: "Oil Degumming Enzyme for efficient rice bran oil processing.",
        image: "/KOSO-RBO.png", // Oil visual
        icon: <Droplet className="w-6 h-6" />
    }
];

// --- DOWNLOADS DATA ---
const enzymeDownloads = [
    {
        id: 1,
        title: "Ready Reckoner",
        subtitle: "Complete Enzyme Guide",
        link: "/ENZYMES.pdf",
        gradientBg: "from-gray-50 to-purple-50",
        hoverBorder: "group-hover:border-purple-400/30",
        iconColor: "group-hover:text-purple-600",
        glowRing: "group-hover:border-purple-500/50",
        labelHover: "group-hover:bg-purple-600",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                <path d="M12 6v6"></path>
                <path d="M9 9h6"></path>
            </svg>
        )
    },
    {
        id: 2,
        title: "Enzymes Blend",
        subtitle: "Digestive & Industrial Mix",
        link: "/ENZYMES BLENDS.pdf",
        gradientBg: "from-gray-50 to-indigo-50",
        hoverBorder: "group-hover:border-indigo-400/30",
        iconColor: "group-hover:text-indigo-600",
        glowRing: "group-hover:border-indigo-500/50",
        labelHover: "group-hover:bg-indigo-600",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2v7.31"></path>
                <path d="M14 9.3V1.99"></path>
                <path d="M8.5 2h7"></path>
                <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
                <path d="M5.5 16h13"></path>
            </svg>
        )
    },
    {
        id: 3,
        title: "Feed Enzymes",
        subtitle: "Animal Nutrition Series",
        link: "/Feed Enzyme.pdf",
        gradientBg: "from-gray-50 to-fuchsia-50",
        hoverBorder: "group-hover:border-fuchsia-400/30",
        iconColor: "group-hover:text-fuchsia-600",
        glowRing: "group-hover:border-fuchsia-500/50",
        labelHover: "group-hover:bg-fuchsia-600",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
            </svg>
        )
    }
];

// --- CATEGORIES DATA (Standard List) ---
const categories = [
    {
        id: 'pharma',
        title: 'PHARMACEUTICAL ENZYMES',
        products: [
            { enzyme: 'LYSOZYME', brand: 'ENRAP-LYSO', app: 'Lysozyme also known as muramidase or N-acetylmuramide glycanhydrolase, is an antiicrobial enzyme produced by animals that forms part of the innate immune system.' },
            { enzyme: 'NATTOKINASE', brand: 'ENWRAP-NAT', app: 'Nattokinase extracted and purified from a japanese food called natto. Nattokinase a potent bllod-clot dissolving protien used the treatment of cardiovascular diseses.' },
            { enzyme: 'PAPAIN', brand: 'ENWRAP-PAP', app: 'Papain is a Proteolytic enzyme extracted from the raw fruit of the papaya plant. Used for the treatment of inflamma and pain via topical administration. Also has anthelmin and tooth whitening purpose.' },
            { enzyme: 'ENZYME BLEND', brand: 'ENZIMAS-DIGEST', app: 'Mixture of various digestive Enzymes (Ask for details)' },
            { enzyme: 'ENZYME BLEND', brand: 'ENZIMAS-DIGEST PLUS', app: 'Mixture of various digestive Enzymes (Ask for details)' },
            { enzyme: 'ENZYME BLEND', brand: 'ENZIMAS-DIGEST PRO', app: 'Mixture of various digestive Enzymes (Ask for details)' },
            { enzyme: 'ENZYME BLEND', brand: 'ENZIMAS-DIGEST ULTRA HIGH', app: 'Mixture of various digestive Enzymes (Ask for details)' },
            { enzyme: 'ENZYME BLEND', brand: 'ENZIMAS-DIGEST MASTER', app: 'Mixture of various digestive Enzymes (Ask for details)' },
        ]
    },
    {
        id: 'digestive',
        title: 'DIGESTIVE ENZYMES',
        products: [
            { enzyme: 'ENZYME BLEND', brand: 'ENZIMAS-DIG', app: 'ENZIMAS-DIG it is a Digestive enzyme and can be used in pharmaceutical industries for manufacturing different medicines for digestive system.' },
            { enzyme: 'ENZYME BLEND', brand: 'ENZIMAS-PEN', app: 'ENZIMAS-PEN is a Blend of amylase, protease and lipase enzymes. It helps with digestion and bicarbonate to neutralize stomach acid as it enters the small intestine.' },
        ]
    },
    {
        id: 'dairy',
        title: 'DAIRY ENZYMES',
        products: [
            { enzyme: 'LACTASE', brand: 'KOSO-LACT', app: 'KOSO-LACT is used in the production of lactose-reduced milk for people who are Intolerant of lactose. Milk Production.' },
            { enzyme: 'TRANS-GLUTAMINASE', brand: 'KOSO-TG', app: 'KOSO-TG prevent syneresis or to make their texture firmer and softer. Yoghurt & Cheese Production.' },
            { enzyme: 'RENET', brand: 'KOSO-REN', app: 'KOSO-REN is widely applicable in milk industries for milk clotting purpose. Cheese Production' },
            { enzyme: 'PROTEASE', brand: 'KOSO-PRO', app: 'KOSO-PRO used for accelerate Cheese Ripening.' },
            { enzyme: 'LIPASE', brand: 'KOSO-LIP', app: 'KOSO-LIP used for accelerate Cheese Ripening.' },
        ]
    },
    {
        id: 'food',
        title: 'FOOD ENZYMES',
        products: [
            { enzyme: 'PECTINASE', brand: 'KOSO-PECT', app: 'KOSO-PECT is mainly used in the beverage industry for the extraction and clarification of juice and wine to remove pectin substances. Juice Clarification/Winery' },
            { enzyme: 'INVERTASE', brand: 'KOSO-INV', app: 'KOSO-INV is used for the inversion of sucrose in the preparation of Invert Sugar and high fructose syrup.' },
            { enzyme: 'GLUCLOSE ISOMERASE', brand: 'KOSO-GI', app: 'KOSO-GI is used for isomerisation of glucose to fructose. Fructose Syrup Production.' },
            { enzyme: 'TRANS-GLUTAMINASE', brand: 'KOSO-TG', app: 'KOSO-TG strongest cohesion of meat block without need of heat processing, salt or phosphate. Meat Industries.' },
            { enzyme: 'BROMELAIN', brand: 'KOSO-BR', app: 'KOSO-BR is a plant protease obtained from pineapple. Its strong Proteolytic activity has created a wide interest in Various Food Industries.' },
            { enzyme: 'PEPSIN', brand: 'KOSO-PEP', app: 'KOSO-PEP can be used in food industries. Modify soybean protein and gelatin and provide whipping qualities.' },
            { enzyme: 'TRYPSIN', brand: 'KOSO-TRY', app: 'KOSO-TRY is a serine protease responsible for the hydrolysis of peptide bonds in the carboxyl terminal ends of lysine (K) and arginine (R) residues.' },
        ]
    },
    {
        id: 'baking',
        title: 'BAKING ENZYMES',
        products: [
            { enzyme: 'ALPHA AMYLASE FUNGAL', brand: 'ENZIMAS-FA', app: 'ENZIMAS-FA Increase bread volume & falling number with good water absorption. Bread Improver.' },
            { enzyme: 'XYLANASE', brand: 'ENZIMAS-XY', app: 'Improve softness of bread or maintain bread structure. Bread Improver.' },
            { enzyme: 'LIPASE & PHOSPHOLIPASE', brand: 'ENZIMAS-LIP', app: 'Improve the structure of bread core, make it delicate and so, and increase the shelf life of bread. Bread improver.' },
            { enzyme: 'PROTEASE', brand: 'ENZIMAS-PRO', app: 'Improve flavor and nutrition value, improves dough, extensibility and dough handling in biscuit industry. Bread improver/biscuits industries.' },
            { enzyme: 'GLUCOSE OXIDASE', brand: 'ENZIMAS-GO', app: 'Strengthened gluten can increase the volume of bread. Bread improver.' },
            { enzyme: 'PAPAIN', brand: 'ENZIMAS-PAP', app: 'The enzyme hydrolyzes the gluten structure to such an extent that the dough loses its elastic properties. Biscuit industry.' },
        ]
    },
    {
        id: 'sugar',
        title: 'SUGAR PROCESS ENZYMES',
        products: [
            { enzyme: 'ALPHA AMYLASE', brand: 'ENZIMAS-A', app: 'ENZIMAS-A Hydrolyzes polysaccharides & oligosaccharides like dextrin and starch & improved quality of sugar. Viscosity reducers in sugar industries' },
            { enzyme: 'DEXTRANASE', brand: 'ENZIMAS-D', app: 'ENZIMAS-D Reduce crystal elongation & improvement of clarity and filterability of syrup. Maintain Sugar quality' },
        ]
    },
    {
        id: 'distillery',
        title: 'DISTILLERY PROCESS ENZYMES',
        products: [
            { enzyme: 'MIXTURE OF FUNGAL ALPHA AMYLASE', brand: 'ENZIMAS-MOL', app: 'ENZIMAS-MOL is the solution to achieve high yielding and stable fermentation process in distillery. Molasses based distillery.' },
            { enzyme: 'MIXTURE OF FUNGAL ALPHA AMYLASE', brand: 'ENZIMAS-ST', app: 'ENZIMAS-ST increases alcohol yield & reduction volatile acids contain in grain based distillery. Grain based distillery' },
        ]
    },
    {
        id: 'starch',
        title: 'STARCH PROCESS ENZYMES',
        products: [
            { enzyme: 'ALPHA AMYLASE HIGH TEMPARATURE', brand: 'ENZIMAS-HT', app: 'EENZIMAS-HT Increase wort yield and grain adjunct cooking capacity. Liquefaction.' },
            { enzyme: 'GLUCOAMYLASE & PULLUINASE', brand: 'ENZIMAS-GA', app: 'ENZIMAS-GA Produces high dextrose equivalent at the end of saccharification process. Saccharification' },
        ]
    },
    {
        id: 'brewery',
        title: 'BREWERY PROCESS ENZYMES',
        products: [
            { enzyme: 'AMYLASE BETA- GLUCANASE+XYLANASE', brand: 'ENZIMAS-ABX', app: 'ENZIMAS-ABX is used for better viscosity reduction and filtration. Mashing.' },
            { enzyme: 'BETA-GLUCANASE', brand: 'ENZIMAS-BG', app: 'ENZIMAS-BG is used to enhance filtration rate in brewery. Mashing.' },
            { enzyme: 'PAPAIN', brand: 'ENZIMAS-PA', app: 'ENZIMAS-PA hydrolyzes proteins and peptides and improves yeast growth. Wort cooling & fermentation.' },
            { enzyme: 'ALPHA ACETO-LACTATE DE-CARBOXILASE', brand: 'ENZIMAS-ALDC', app: 'ENZIMAS-ALDC Avoid formation of diacetyl form of alpha acetolactate during fermentation. Fermentation & maturation.' },
            { enzyme: 'ALPHA AMYLASE HIGH TEMPARATURE', brand: 'ENZIMAS -AAHT', app: 'ENZIMASS -AAHT Hydrolyzes starch molecule and reduce viscosity. Mashing.' },
            { enzyme: 'GLUCOAMYLASE & PULLUINASE', brand: 'ENZIMAS-GAP', app: 'ENZIMAS-GAP Hydrolyzes dextrin, maltose and convert into simple form for yeast healthy growth. Fermentation' },
        ]
    },
    {
        id: 'feed',
        title: 'FEED ENZYMES',
        products: [
            { enzyme: 'PHYTASE', brand: 'ZYME-PHT', app: 'ZYME-PHT Increases protein digestibility, Improve protein utilization by the animal. Improve nutritional value.' },
            { enzyme: 'CELLULASE', brand: 'ZYME-CELL', app: 'ZYME-CELL Is used to improve silage production for cattle feeding. Improve nutritional Value' },
            { enzyme: 'PROTEASE', brand: 'ZYME-PRO', app: 'ZYME-PRO Hydrolyzed non starchy material. Improve nutritional value' },
            { enzyme: 'AMYLASE', brand: 'ZYME-AM', app: 'ZYME-AM Hydrolyzed starch material. Improve Nutritional value' },
        ]
    },
    {
        id: 'textile',
        title: 'TEXTILE ENZYMES',
        products: [
            { enzyme: 'ALPHA AMYLASE HIGH TEMPERATURE', brand: 'TEXT-AHTT', app: 'TEXT-AHTT is used for desizing woven fabrics because of their highly efficient and specific way to desizing without harming the yarn at various temperatures. DESIZING' },
            { enzyme: 'ALPHA AMYLASE LOW TEMPERATURE', brand: 'TEXT-ALTT', app: 'TEXT-ALTT is used for desizing woven fabrics because of their highly efficient and specific way to desizing without harming the yarn at various temperatures. DESIZING' },
            { enzyme: 'ALPHA AMYLASE (BACTERIAL)', brand: 'TEXT-AAB', app: 'TEXT-AAB are used for desizing woven fabrics because of their highly efficient and specific way to desizing without harming the yarn at various temperatures. DESIZING' },
            { enzyme: 'ACID CELLULASE', brand: 'TEXT-ACL', app: 'TEXT-ACL is cellulase for surface modification of cellulosic fabrics to reduce the hairiness and increase the resistance to pilling. BIOPOLISHING' },
            { enzyme: 'NEUTRAL CELLULASE', brand: 'TEXT-NCL', app: 'TEXT-NCL is cellulase for surface modification of cellulosic fabrics to reduce the hairiness and increase the resistance to pilling. BIOPOLISHING' },
        ]
    },
    {
        id: 'detergent',
        title: 'DETERGENT ENZYMES',
        products: [
            { enzyme: 'PROTEASE', brand: 'WASCH-PRO', app: 'WASCH-PRO Treats protein and break down cells like as Pus cell, blood cell, mucus. Quality improver of detergent.' },
            { enzyme: 'LIPASE', brand: 'WASCH-LIP', app: 'WASCH-LIP Treats oil contents and breaks down it to make water soluble. Quality improver of detergent.' },
            { enzyme: 'CELLULASE', brand: 'WASCH-CELL', app: 'WASCH-CELL Treats cellulose contents and breaks down it to make water soluble. Quality improver of detergent.' },
            { enzyme: 'AMYLASE', brand: 'WASCH-AMY', app: 'WASCH-AMY Treats starch contents and make cloth very smooth. Quality improver of detergent.' },
            { enzyme: 'ENZYME BLEND (P)', brand: 'WASCH-MULTI (P)', app: 'WASCH-MULTI (P) is mixture of enzymes. They are highly effective to improve the detergent quality.' },
            { enzyme: 'ENZYME BLEND (L)', brand: 'WASCH-MULTI (L)', app: 'WASCH-MULTI (L) are mixture of enzymes. They are highly effective to improve the detergent quality.' },
        ]
    },
    {
        id: 'wastewater',
        title: 'WASTE WATER TREATMENT ENZYMES',
        products: [
            { enzyme: 'BLEND OF VARIOUS ENZYMES AND MICROBS', brand: 'WWT-AEROBIC', app: 'WWT-AEROBIC is used to remove bad odor from secondary waste water treatment.' },
            { enzyme: 'BLEND OF VARIOUS ENZYMES AND MICROBS', brand: 'WWT-ANAEROBIC', app: 'WWT-ANAEROBIC is used to remove bad odor from secondary waste water treatment.' },
            { enzyme: 'BLEND OF VARIOUS ENZYMES AND MICROBS', brand: 'AQUAZYME', app: 'AQUAZYME A complete remedy for Effluent treatment/sewage treatment. Removes odor completely, Reduces BOD/COD up to 98%, Reduce TSS & TS up to 98%, minimizes sludge near to zero.' },
            { enzyme: 'MIXTURE OF NUTRIENT', brand: 'NANOZYME', app: 'NANOZYME A completes nutrition for blend of microbes.' },
        ]
    }
];

export default function Enzymes() {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (id) => {
        setOpenCategory(openCategory === id ? null : id);
    };

    const handleWhatsAppOrder = (enzymeName, brandName) => {
        const message = `Hello Aqua Chemicals, I would like to place an order for *${brandName}* (${enzymeName}). Please provide pricing and availability.`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    const handleTechnicalConsult = () => {
        const message = "Hello, I need technical consultation regarding Specialty Enzymes (Pizzyme, Khakhrazyme, etc.) application and dosage.";
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="w-full bg-[#f5f3ff] min-h-screen pb-20"> 
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#7c3aed] to-[#4c1d95] py-16 md:py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-molecular opacity-10"></div>
                <h1 className="text-4xl md:text-6xl font-bold text-white font-display relative z-10 drop-shadow-md flex items-center justify-center gap-4">
                    <Dna className="w-12 h-12 md:w-16 md:h-16 animate-pulse" />
                    Industrial Enzymes
                </h1>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* --- NEW: SPECIALTY ENZYMES SPOTLIGHT --- */}
                <div className="mb-20 relative">
                    <div className="text-center mb-12">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-bold tracking-wider mb-4 uppercase">
                            Innovation Spotlight
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#4c1d95]">Speciality Enzyme Blends</h2>
                        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                            Custom-formulated solutions for the food processing industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {specialtyEnzymes.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            >
                                {/* Image Area */}
                                <div className="h-40 overflow-hidden relative">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-3 left-3 text-white flex items-center gap-2">
                                        <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-full">
                                            {item.icon}
                                        </div>
                                        <span className="font-bold text-lg drop-shadow-md">{item.name}</span>
                                    </div>
                                </div>
                                
                                {/* Content Area */}
                                <div className="p-5">
                                    <p className="text-gray-600 text-sm mb-4 h-10 line-clamp-2">{item.desc}</p>
                                    <button 
                                        onClick={handleTechnicalConsult}
                                        className="w-full py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-bold hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                                    >
                                        <PhoneCall className="w-4 h-4" /> Consult Expert
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Consultation Banner */}
                    <div className="mt-8 bg-gradient-to-r from-[#4c1d95] to-[#7c3aed] rounded-xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                                <Sparkles className="w-6 h-6 text-yellow-300" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Need Application Dosage?</h4>
                                <p className="text-purple-200 text-sm">Our technical team provides precise guidance for Pizzyme, KOSO-RBO, and more.</p>
                            </div>
                        </div>
                        <button 
                            onClick={handleTechnicalConsult}
                            className="bg-white text-[#4c1d95] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-md flex items-center gap-2 whitespace-nowrap"
                        >
                            <PhoneCall className="w-5 h-5" /> +91-9414067366
                        </button>
                    </div>
                </div>

                {/* --- TECHNICAL RESOURCES / PDF DOWNLOADS --- */}
                <div className="mb-16 bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500"></div>
                    <div className="p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-[#4c1d95] mb-2">Technical Resources</h2>
                            <p className="text-gray-500">Download our detailed enzyme specifications and guides</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                            {enzymeDownloads.map((doc) => (
                                <div key={doc.id} className="flex flex-col items-center group cursor-pointer w-full">
                                    <a href={doc.link} target="_blank" rel="noopener noreferrer" className=" w-full flex flex-col items-center">
                                        <div className={`w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300 mb-6 relative overflow-hidden border-4 border-transparent ${doc.hoverBorder}`}>
                                            <div className={`absolute inset-0 bg-gradient-to-br ${doc.gradientBg} opacity-80`}></div>
                                            <div className={`relative z-10 text-[#4c1d95] ${doc.iconColor} transition-colors`}>
                                                {doc.icon}
                                            </div>
                                            <div className={`absolute inset-0 rounded-full border-2 border-transparent ${doc.glowRing} transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100`}></div>
                                        </div>
                                        <div className={`bg-[#4c1d95] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg ${doc.labelHover} transition-colors flex flex-col items-center text-center w-3/4`}>
                                            <span>{doc.title}</span>
                                            <span className="text-xs opacity-80 font-normal mt-1 normal-case">{doc.subtitle}</span>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Intro Section */}
                <div className="bg-white rounded-xl shadow-sm p-8 mb-12 border border-gray-100">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-purple-100 rounded-lg">
                            <Dna className="w-8 h-8 text-purple-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#4c1d95] mt-2">Advanced Biocatalysts</h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        The list of Enzymes made by the company covers a wide spectrum of industrial applications including Pharmaceutical, Food, Textile, and Waste Water Treatment sectors.
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categories.map((cat) => (
                            <button 
                                key={cat.id}
                                onClick={() => {
                                    setOpenCategory(cat.id);
                                    document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-purple-50 hover:text-purple-700 transition text-left group border border-transparent hover:border-purple-200"
                            >
                                <ChevronRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition" />
                                <span className="font-medium text-gray-700 group-hover:text-purple-800 text-sm uppercase tracking-wide">{cat.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Accordion List */}
                <div className="space-y-4">
                    {categories.map((category) => (
                        <div key={category.id} id={category.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 scroll-mt-24">
                            
                            <button 
                                onClick={() => toggleCategory(category.id)}
                                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openCategory === category.id ? 'bg-gradient-to-r from-[#7c3aed] to-[#4c1d95] text-white' : 'bg-white text-[#4c1d95] hover:bg-gray-50'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-full ${openCategory === category.id ? 'bg-white/20' : 'bg-purple-100'}`}>
                                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${openCategory === category.id ? 'rotate-90 text-white' : 'text-purple-600'}`} />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">{category.title}</h3>
                                </div>
                                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openCategory === category.id ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence initial={false}>
                                {openCategory === category.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 bg-gray-50 border-t border-gray-100 overflow-x-auto">
                                            
                                            <table className="w-full text-left border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr className="bg-gray-200 text-gray-700 text-sm uppercase tracking-wider">
                                                        <th className="p-4 border border-gray-300 font-semibold w-1/4">ENZYME NAME</th>
                                                        <th className="p-4 border border-gray-300 font-semibold w-1/4">BRAND NAME</th>
                                                        <th className="p-4 border border-gray-300 font-semibold w-1/2">APPLICATION</th>
                                                        <th className="p-4 border border-gray-300 font-semibold w-24 text-center">ORDER</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {category.products.map((prod, idx) => (
                                                        <tr key={idx} className="hover:bg-purple-50/50 transition-colors bg-white">
                                                            <td className="p-4 border border-gray-200 font-medium text-[#4c1d95]">{prod.enzyme}</td>
                                                            <td className="p-4 border border-gray-200">
                                                                <span className="px-2 py-1 rounded text-xs font-bold bg-purple-100 text-purple-700 border border-purple-200">
                                                                    {prod.brand}
                                                                </span>
                                                            </td>
                                                            <td className="p-4 border border-gray-200 text-gray-600 text-sm leading-relaxed">{prod.app}</td>
                                                            <td className="p-4 border border-gray-200 text-center">
                                                                <button 
                                                                    onClick={() => handleWhatsAppOrder(prod.enzyme, prod.brand)}
                                                                    className="flex items-center justify-center gap-1 text-green-600 hover:text-green-700 font-bold text-sm hover:underline mx-auto"
                                                                >
                                                                    <MessageCircle className="w-4 h-4" /> Order
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                     <button 
                        onClick={() => handleWhatsAppOrder("General Inquiry", "Enzymes Division")}
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition shadow-lg"
                    >
                        Chat on WhatsApp for Custom Enzyme Requirements <MessageCircle className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </div>
    );
}