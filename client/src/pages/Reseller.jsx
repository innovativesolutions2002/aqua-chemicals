import { motion } from 'framer-motion';
import { Handshake, Users, TrendingUp, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "919414067366";

export default function Reseller() {
    const handleWhatsApp = () => {
        const message = "Hello Aqua Chemicals, I am interested in becoming a Reseller/Distributor. Please share more details.";
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="w-full bg-slate-50 min-h-screen pb-20">
            
            {/* Header Banner */}
            <div className="bg-[#032b44] py-16 md:py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-molecular opacity-10"></div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-display mb-4 flex items-center justify-center gap-4">
                        <Handshake className="w-12 h-12 md:w-16 md:h-16 text-chem-400" />
                        Become a Partner
                    </h1>
                    <p className="text-chem-100 text-lg max-w-2xl mx-auto px-4">
                        Grow with Aqua Chemicals. We believe in prospering through relationships.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    
                    {/* Left: Image/Visual */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-chem-200 rounded-2xl transform -rotate-3 opacity-50"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Business Partnership" 
                            className="relative rounded-xl shadow-2xl w-full h-auto object-cover border-4 border-white"
                        />
                        
                        {/* Floating Stat Card */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-green-100 rounded-full">
                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-[#032b44]">Pan-India</div>
                                    <div className="text-sm text-gray-500">Presence</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-[#032b44]">Our Philosophy</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We believe no Organization is complete without its Associates. At <strong>Aqua Chemicals and Enzymes</strong>, we believe in working & prospering through relations. We feel relationships act as the backbone to any organization & is not just mere, a ladder to success.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We aspire to Grow along with our Associates, & make our dealers & distributors a party to our growing spectrum. Today we're functioning in all the major states, cities & towns & our presence can be felt with our products becoming a well known & accepted name in their respective categories.
                        </p>
                        <p className="text-[#032b44] text-lg leading-relaxed font-medium bg-blue-50 p-4 rounded-lg border-l-4 border-chem-500">
                            "In such diversified & dynamic business conditions, we invite passionate & enthusiastic entrepreneurs, who are ready to explore the market & ride the growth momentum, making their dreams, turn into reality."
                        </p>
                    </motion.div>
                </div>

                {/* Requirements Section */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-16">
                    <div className="bg-[#032b44] p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                            <Users className="w-8 h-8 text-chem-400" />
                            Who We Are Looking For
                        </h3>
                        <p className="text-chem-100 mt-2">In lieu of making you a part of our organization, we look forward to:</p>
                    </div>
                    
                    <div className="p-8 md:p-12 grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Industry Expertise",
                                desc: "One who is already having an expertise in Chemical Business.",
                                icon: "🧪"
                            },
                            {
                                title: "Technical Understanding",
                                desc: "One who is a science graduate & is able to comprehend the families & chemical compositions of the product.",
                                icon: "🎓"
                            },
                            {
                                title: "Entrepreneurial Mindset",
                                desc: "One who possess some excellent communication skills & an entrepreneurial mindset, with an office space & basic infrastructure.",
                                icon: "🚀"
                            }
                        ].map((req, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                            >
                                <div className="text-4xl mb-4">{req.icon}</div>
                                <h4 className="text-xl font-bold text-[#032b44] mb-3">{req.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{req.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-[#032b44] mb-6">
                        If you qualify in the above three, then feel free to contact us.
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg">
                        We promise we will try to bring you one step closer to your dreams.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={handleWhatsApp}
                            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition shadow-lg text-lg"
                        >
                            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                        </button>
                        <a 
                            href="mailto:sales@aquachemicals.org?subject=Reseller Inquiry"
                            className="inline-flex items-center justify-center gap-2 bg-[#032b44] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#021f33] transition shadow-lg text-lg"
                        >
                            Email Us <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}