import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, FlaskConical, ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "919414067366"; // Your number from the screenshot (Format: CountryCode + Number, no + or -)

// --- DATA SECTION (Same as before) ---
const categories = [
    {
        id: 'boiler',
        title: 'BOILER WATER TREATMENT CHEMICALS',
        products: [
            { name: 'HYDROCHEM', type: 'POW', desc: 'Multipurpose boiler water treatment chemical for 18 kg to 42 kg/cm2 w.p. boiler', app: 'on total W.H.C. of boiler', dosage: '7-12 PPM' },
            { name: 'HYDROCHEM', type: 'LIQ', desc: 'Polymer base multi purpose boiler water treatment chemical for 18kg to 90 kg/cm2', app: 'on total W.H.C. of boiler', dosage: '7-12 PPM' },
            { name: 'HYDROCHEM', type: 'LIQ', desc: 'Cyclic amine base chemical for boiler condensate water treatment for 18kg to 90kg/cm2 w.p. boiler', app: 'on total W.H.C. of boiler', dosage: '5-7 PPM' },
            { name: 'HYDROCHEM-SS', type: 'POW', desc: 'Sludge conditioner, scale preventive for low & high pressure boiler', app: 'on total W.H.C. of boiler', dosage: '7-15 ppm' },
            { name: 'HYDROCHEM-SS', type: 'LIQ', desc: 'Sludge conditioner, scale preventive for low & high pressure boiler', app: 'on total W.H.C. of boiler', dosage: '10-20 ppm' },
            { name: 'ALKACHEM', type: 'POW', desc: 'pH booster for low & high pressure boiler', app: '-', dosage: '10-12 ppm' },
            { name: 'ALKACHEM', type: 'LIQ', desc: 'pH booster for low & high pressure boiler', app: 'on total W.H.C. of boiler', dosage: '10-15 ppm' },
            { name: 'OXYCHEM', type: 'POW', desc: 'Oxygen scavenger for low & high pressure boiler', app: '-', dosage: '1-1.5 ppm' },
            { name: 'OXYCHEM', type: 'LIQ', desc: 'Oxygen scavenger for low & high pressure boiler', app: '-', dosage: '2.5-5 ppm' },
            { name: 'AQUA-222', type: 'POW', desc: 'Anti silica compound for low& high pressure boiler', app: 'on total W.H.C. of boiler', dosage: '1-2.5 ppm' },
            { name: 'AQUA-333', type: 'POW', desc: 'Anti foam, anti priming compound for low & high pressure boiler', app: 'on total W.H.C. of boiler', dosage: '0.5-1.5 ppm' },
            { name: 'AQUA-333', type: 'LIQ', desc: 'Anti foam, anti priming compound for low & high pressure boiler', app: 'on total W.H.C. of boiler', dosage: '0.5-1.5 ppm' },
            { name: 'AQUA-444', type: 'POW', desc: 'De-gassing chemical for high pressure boiler', app: 'on total W.H.C. of boiler', dosage: '1.5-2.5 ppm' },
            { name: 'AQUA-444', type: 'LIQ', desc: 'De-gassing chemical for high pressure boiler', app: 'on total W.H.C. of boiler', dosage: '2-3.5 ppm' },
        ]
    },
    {
        id: 'descaling',
        title: 'DE-SCALING CHEMICALS & CORROSION INHIBITOR CHEMICALS',
        products: [
            { name: 'CLEACHEM', type: 'POW', desc: 'De-scaling chemical scale softener', app: 'on total W.H.C. of boiler', dosage: '1.5-2.5%' },
            { name: 'MEGACHEM', type: 'LIQ', desc: 'De-scaling chemical scale remover', app: 'on total W.H.C. of boiler', dosage: '2.5-4.5%' },
            { name: 'MEGACHEM-SP', type: 'LIQ', desc: 'De-scaling chemical', app: 'on total W.H.C. of boiler', dosage: '2.5-4.5%' },
            { name: 'NEUCHEM', type: 'POW', desc: 'De-scaling chemical neutralizing agent', app: 'on total W.H.C. of boiler', dosage: '0.50%' },
            { name: 'COROCHEM-SP', type: 'LIQ', desc: 'corrosion inhibitor for HCL used for copper brass MS SS', app: 'on volume of con.acid', dosage: '1-2%' },
            { name: 'COROCHEM', type: 'LIQ', desc: 'corrosion inhibitor for HCL used for copper brass MS SS', app: 'on volume of con.acid', dosage: '2-2.5%' },
            { name: 'COROCHEM-HF', type: 'LIQ', desc: 'corrosion inhibitor for hydrofluoric acid used for any type of steel', app: 'On volume of dilute acid solution', dosage: '1-2%' },
            { name: 'COROCHEM-OR', type: 'LIQ', desc: 'corrosion inhibitor for sulf.acid, phos.acid, acetic acid, citric acid', app: 'on volume of con.acid', dosage: '1-2%' },
            { name: 'COROCHEM-CBH', type: 'LIQ', desc: 'corrosion inhibitor for citric, tartaric, oxalic acid & sod. Bisulphate', app: 'on volume of con.acid', dosage: '0.5-2.5%' },
            { name: 'COROCHEM', type: 'POW', desc: 'corrosion inhibitor for sulfuric & citric acid', app: 'on volume of con.acid', dosage: '2-2.5%' },
            { name: 'POLYCHEM-RD', type: 'POW', desc: 'De-scaling chemical for heat exch., turbine-cooler, radiator, D.G. Set', app: 'on Total W.H.C of equipment', dosage: 'ask to us' },
        ]
    },
    {
        id: 'cooling',
        title: 'COOLING WATER TREATMENT CHEMICALS',
        products: [
            { name: 'AQUA-555', type: 'POW', desc: 'Scale preventive & sludge conditioner compound', app: 'on total W.H.C. of system', dosage: '3-7 ppm' },
            { name: 'AQUA-555', type: 'LIQ', desc: 'Scale preventive & sludge conditioner compound', app: 'on total W.H.C. of system', dosage: '5-10 ppm' },
            { name: 'AQUA-666', type: 'LIQ', desc: 'Anti corrosion compound useful in preventing bacterial corrosion', app: 'on total W.H.C. of system', dosage: '3-7 ppm' },
            { name: 'AQUA-777', type: 'LIQ', desc: 'Anti corrosion compound useful in preventing all kind of corrosion', app: 'on total W.H.C. of system', dosage: '-' },
            { name: 'AQUA-888', type: 'LIQ', desc: 'Biocide for cooling water system', app: 'on total W.H.C. of system', dosage: '2-5 ppm' },
            { name: 'SLIMOCIDE-10', type: 'LIQ', desc: 'Slimicide for paper industries excellent biocide', app: 'on total W.H.C. of system', dosage: '5-10 ppm' },
            { name: 'ALGICHEM', type: 'LIQ', desc: 'Anti-algae compound', app: 'on total W.H.C. of system', dosage: '5-7 ppm' },
            { name: 'ALKACHEM-SP', type: 'LIQ', desc: 'High Grade, De-Scalant for moulding units', app: 'solution in water', dosage: '20%' },
        ]
    },
    {
        id: 'effluent',
        title: 'EFFLUENT TREATMENT CHEMICALS',
        products: [
            { name: 'MAGIFLOC', type: 'LIQ', desc: 'Multipurpose effluent treatment chemicals', app: 'based on quantity of pollutants', dosage: '5-100 ppm' },
            { name: 'MAGIFLOC 1947', type: 'LIQ', desc: 'An organic cationic coagulant .recommended for color effluent', app: 'based on guidelines', dosage: '5-10 ppm' },
        ]
    },
    {
        id: 'distillery',
        title: 'DISTILLERY CHEMICALS',
        products: [
            { name: 'POLYCHEM-DF', type: 'LIQ', desc: 'Thick white emulsion anti-foam/De-foam', app: 'based on water ratio', dosage: '1:10-15' },
            { name: 'SLIMOCIDE-17', type: 'LIQ', desc: 'Slimicide anti-algae, anti-fungal, anti-fouling anti-bacterial comp.', app: 'based on W.H.C', dosage: '5-10 ppm' },
            { name: 'BOTTLE WASH', type: 'LIQ', desc: 'High grade disinfectant bottle washer & cleaner', app: 'in 100 Ltr. Water', dosage: '5 kg in 100 Lts of water' },
        ]
    },
    {
        id: 'sugar',
        title: 'SPECIALITY CHEMICALS FOR SUGAR INDUSTRIES',
        products: [
            { name: 'DECOCHEM', type: 'LIQ', desc: 'Non ionic surfactant, excellent sugar brightener', app: 'on total cane crushed', dosage: '6-8 ppm' },
            { name: 'VISCOCHEM', type: 'LIQ', desc: 'Viscosity reducer for massecuit A, B. C.', app: 'on 40 tons of massecuit', dosage: 'ask to us' },
            { name: 'BECTOKIL-EO', type: 'LIQ', desc: 'Biocide/mill sanitation compound', app: 'on total cane crushed', dosage: '5-15 ppm' },
            { name: 'AQUA-1670', type: 'LIQ', desc: 'Online anti-scalant for evaporator tubes', app: 'on total cane crushed', dosage: '2-3.5 ppm' },
            { name: 'EVOCHEM', type: 'POW', desc: 'Scale softener for evaporator cleaning, caustic soda additive', app: 'on total caustic consumption', dosage: '25-30%' },
            { name: 'EVOCHEM-MP', type: 'POW', desc: 'Scale softener for evaporator cleaning, without causative soda', app: 'on total chemical consumption', dosage: '60-70%' },
            { name: 'KEMIFLOC', type: 'POW', desc: 'Polyelectrolyte flocculating agent for mud settling in sugar indust', app: 'ask to us', dosage: 'ask to us' },
            { name: 'POLYCHEM-DFS', type: 'LIQ', desc: 'Viscous thick anti-foam/de-foaming based on hydrocarbons', app: 'ask to us', dosage: 'ask to us' },
            { name: 'SLLFAMIC-ACID', type: 'POW', desc: 'Descalant for falling, boilers and other sensitive equipments', app: 'ask to us', dosage: 'ask to us' },
        ]
    },
    {
        id: 'ro',
        title: 'R.O. PLANT CHEMICALS',
        note: '100 US GALLON = 378.55 LT. The water holding in pipe and circulation tank and drain is not included in the calculations.',
        headers: ['Product', 'Packing', 'PH', 'Dosage/ 100US Gallons', 'Application'],
        products: [
            { name: 'AQUA-212 Anti scalant', pack: '50 KG', ph: 'LOW', dosage: '7.7 lt', app: 'Removing inorganic scale & metal oxide.' },
            { name: 'AQUA-213 Anti scalant', pack: '50KG', ph: 'HIGH', dosage: '10.25 lt', app: 'Removing Ca2SO4, Light to moderate level organic foulant' },
            { name: 'AQUA-214 Anti scalant', pack: '50 KG', ph: 'HIGH', dosage: '7.8 lt', app: 'Removing heavier organic foulant' },
            { name: 'AQUA-216 Cleaning solution', pack: '50 KG', ph: 'LOW', dosage: '1.7 lt', app: 'Removing inorganic material (harsher)' },
            { name: 'AQUA-217 Cleaning solution', pack: '50 KG', ph: 'LOW (4-6)', dosage: '3.8 lt', app: 'Removing metal oxide, hydroxide (iron fouling)' },
            { name: 'AQUA-218 Cleaning solution', pack: '50 KG', ph: 'HIGH (11.5)', dosage: '3.8 lt', app: 'Removing organic/colloidal foulant (harsher)' },
            { name: 'AQUA-219 Cleaning Solution', pack: '50 KG', ph: 'HIGH', dosage: '3.8 lt', app: 'Removing organic/colloidal foulant' },
            { name: 'AQUA-220 Biocides', pack: '50 KG', ph: 'LOW', dosage: '5.0 lt.', app: 'Biocide for slime forming and SRB Fungi' },
            { name: 'AQUA-221 Corrosion inhibitor', pack: '50 KG', ph: 'HIGH', dosage: '5.0 lt.', app: 'Corrosion inhibitor and red water solution' },
            { name: 'POLYCHEM-DF', pack: '50KG', ph: 'NEUTRAL', dosage: '25.0 lt.', app: 'Anti-foam for sugar, distillery, paper' },
        ]
    },
    {
        id: 'poly',
        title: 'POLY ELECTROLYTE CHEMICALS',
        headers: ['NAME', 'NATURE', 'Application', 'PKG'],
        products: [
            { name: 'A-8100', nature: 'ANIONIC/POWDER', app: 'Coagulant, sludge condtioning agent', pkg: '25 KG' },
            { name: 'A-8110', nature: 'ANIONIC/POWDER', app: 'Coagulant, sludge condtioning agent', pkg: '25 KG' },
            { name: 'A-8120', nature: 'ANIONIC/POWDER', app: 'Coagulant, sludge conditioning agent', pkg: '25 KG' },
            { name: 'A-8130', nature: 'ANIONIC/POWDER', app: 'flocculation for water clarification process', pkg: '25 KG' },
            { name: 'C-573-I', nature: 'CATIONIC/LIQUID', app: 'primary coagulant neutralizing aid', pkg: '210 KG' },
            { name: 'C577-I', nature: 'CATIONIC/LIQUID', app: 'primary coagulant neutralizing aid', pkg: '210 KG' },
            { name: 'C-8492', nature: 'CATIONIC/POWDER', app: 'flocculant for water clarificaton process', pkg: '210 KG' },
            { name: 'C-8494', nature: 'CATIONIC/POWDER', app: 'flocculant for water clarificaton process', pkg: '210 KG' },
            { name: 'C-8496', nature: 'CATIONIC/POWDER', app: 'flocculant for water clarificaton process', pkg: '210 KG' },
            { name: 'C-8498', nature: 'CATIONIC/POWDER', app: 'flocculant for water clarificaton process', pkg: '210 KG' },
            { name: 'C-8592', nature: 'CATIONIC/LIQUID', app: 'DADMAC flocculant for water clarifi.', pkg: '210 KG' },
            { name: 'C-8594', nature: 'CATIONIC/LIQUID', app: 'DADMAC primary coagulant', pkg: '210 kg' },
            { name: 'DE-491-I', nature: 'CATIONIC/LIQUID', app: 'QAC Effluent decolorizing agent', pkg: '210 KG' },
            { name: 'PAX XL 905', nature: 'POWDER', app: 'Inorgainc flocculant', pkg: '200 kg' },
        ]
    }
];

export default function WaterTreatmentChemicals() {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (id) => {
        setOpenCategory(openCategory === id ? null : id);
    };

    // --- WHATSAPP LOGIC ---
    const handleWhatsAppOrder = (productName) => {
        const message = `Hello Aqua Chemicals, I would like to place an order for *${productName}*. Please provide pricing and availability.`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    return (
        <div className="w-full bg-[#f0f9ff] min-h-screen pb-20">
            
            {/* Header Banner */}
            <div className="bg-[#2daae1] py-16 md:py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-molecular opacity-10"></div>
                <h1 className="text-4xl md:text-6xl font-bold text-white font-display relative z-10 drop-shadow-md">
                    Water Treatment Chemicals
                </h1>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* Intro Section */}
                <div className="bg-white rounded-xl shadow-sm p-8 mb-12 border border-gray-100">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-chem-100 rounded-lg">
                            <FlaskConical className="w-8 h-8 text-chem-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#032b44] mt-2">Specialty Chemical Solutions</h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        The Company sales specialty chemicals. The main trust area in Sugar processing industry, Chemical industry, Paper making industry, Distilleries etc. The main area of chemical products made by the company for the above mentioned industries are:
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categories.map((cat) => (
                            <button 
                                key={cat.id}
                                onClick={() => {
                                    setOpenCategory(cat.id);
                                    document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-chem-50 hover:text-chem-700 transition text-left group border border-transparent hover:border-chem-200"
                            >
                                <ChevronRight className="w-5 h-5 text-chem-500 group-hover:translate-x-1 transition" />
                                <span className="font-medium text-gray-700 group-hover:text-chem-800 text-sm uppercase tracking-wide">{cat.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Accordion List */}
                <div className="space-y-4">
                    {categories.map((category) => (
                        <div key={category.id} id={category.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 scroll-mt-24">
                            
                            {/* Accordion Header */}
                            <button 
                                onClick={() => toggleCategory(category.id)}
                                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openCategory === category.id ? 'bg-[#2daae1] text-white' : 'bg-white text-[#032b44] hover:bg-gray-50'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-full ${openCategory === category.id ? 'bg-white/20' : 'bg-chem-100'}`}>
                                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${openCategory === category.id ? 'rotate-90 text-white' : 'text-chem-600'}`} />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">{category.title}</h3>
                                </div>
                                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openCategory === category.id ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Accordion Content */}
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
                                                        {category.headers ? (
                                                            category.headers.map((h, i) => <th key={i} className="p-4 border border-gray-300 font-semibold">{h}</th>)
                                                        ) : (
                                                            <>
                                                                <th className="p-4 border border-gray-300 font-semibold w-1/6">PRODUCT</th>
                                                                <th className="p-4 border border-gray-300 font-semibold w-24">PW/LQ</th>
                                                                <th className="p-4 border border-gray-300 font-semibold w-1/3">DESCRIPTION</th>
                                                                <th className="p-4 border border-gray-300 font-semibold w-1/4">APPLICATION</th>
                                                                <th className="p-4 border border-gray-300 font-semibold w-24">DOSAGE</th>
                                                                <th className="p-4 border border-gray-300 font-semibold w-24 text-center">ORDER</th>
                                                            </>
                                                        )}
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {category.products.map((prod, idx) => (
                                                        <tr key={idx} className="hover:bg-chem-50/50 transition-colors bg-white">
                                                            {category.id === 'ro' ? (
                                                                <>
                                                                    <td className="p-4 border border-gray-200 font-medium text-[#032b44]">{prod.name}</td>
                                                                    <td className="p-4 border border-gray-200 text-gray-600">{prod.pack}</td>
                                                                    <td className="p-4 border border-gray-200 text-gray-600">{prod.ph}</td>
                                                                    <td className="p-4 border border-gray-200 text-gray-600">{prod.dosage}</td>
                                                                    <td className="p-4 border border-gray-200 text-gray-600 text-sm">{prod.app}</td>
                                                                    <td className="p-4 border border-gray-200 text-center">
                                                                        <button 
                                                                            onClick={() => handleWhatsAppOrder(prod.name)}
                                                                            className="flex items-center justify-center gap-1 text-green-600 hover:text-green-700 font-bold text-sm hover:underline"
                                                                        >
                                                                            <MessageCircle className="w-4 h-4" /> Order
                                                                        </button>
                                                                    </td>
                                                                </>
                                                            ) : category.id === 'poly' ? (
                                                                <>
                                                                    <td className="p-4 border border-gray-200 font-medium text-[#032b44]">{prod.name}</td>
                                                                    <td className="p-4 border border-gray-200 text-gray-600">{prod.nature}</td>
                                                                    <td className="p-4 border border-gray-200 text-gray-600">{prod.app}</td>
                                                                    <td className="p-4 border border-gray-200 text-gray-600">{prod.pkg}</td>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <td className="p-4 border border-gray-200 font-medium text-[#032b44]">{prod.name}</td>
                                                                    <td className="p-4 border border-gray-200">
                                                                        <span className={`px-2 py-1 rounded text-xs font-bold ${prod.type === 'LIQ' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>
                                                                            {prod.type}
                                                                        </span>
                                                                    </td>
                                                                    <td className="p-4 border border-gray-200 text-gray-600 text-sm">{prod.desc}</td>
                                                                    <td className="p-4 border border-gray-200 text-gray-500 text-sm italic">{prod.app}</td>
                                                                    <td className="p-4 border border-gray-200 text-gray-700 font-medium">{prod.dosage}</td>
                                                                    <td className="p-4 border border-gray-200 text-center">
                                                                        <button 
                                                                            onClick={() => handleWhatsAppOrder(prod.name)}
                                                                            className="flex items-center justify-center gap-1 text-green-600 hover:text-green-700 font-bold text-sm hover:underline"
                                                                        >
                                                                            <MessageCircle className="w-4 h-4" /> Order
                                                                        </button>
                                                                    </td>
                                                                </>
                                                            )}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                            {category.note && (
                                                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                                                    <strong>Note:</strong> {category.note}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                     <button 
                        onClick={() => handleWhatsAppOrder("General Inquiry")}
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition shadow-lg"
                    >
                        Chat on WhatsApp for Custom Requirements <MessageCircle className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </div>
    );
}