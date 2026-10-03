import { motion } from 'framer-motion';
import { CheckCircle2, Microscope, Leaf, Award } from 'lucide-react';

export default function About() {
    return (
        <section className="py-32 max-w-7xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 text-chem-400 font-medium mb-4">
                        <Microscope className="w-5 h-5" /> Our Scientific Heritage
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        Pioneering <span className="text-enzyme-400">Green Chemistry</span> Since 1993
                    </h2>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>Aqua Chemicals and Enzymes emerged from a collective vision of engineers determined to redefine industrial chemistry. We didn't just want to manufacture chemicals and enzymes; we wanted to engineer <strong className="text-white">eco-friendly economical solutions</strong> that respect both industry needs and environmental boundaries.</p>
                        <p>As first movers in India's eco-friendly water chemical manufacturing, we've established practices that balance molecular precision with ecological responsibility.</p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-6">
                        {[
                            { icon: Award, label: 'ISO 14001-2015', sub: 'Certified' },
                            { icon: Leaf, label: 'Eco-First', sub: 'Manufacturing' },
                        ].map((item, i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <item.icon className="w-8 h-8 text-chem-500 mb-3" />
                                <div className="font-bold text-white">{item.label}</div>
                                <div className="text-sm text-gray-500">{item.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-chem-500/20 to-enzyme-500/20 rounded-3xl blur-2xl" />
                    <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-10">
                        <h3 className="font-display text-2xl font-bold mb-8">Technical Capabilities</h3>
                        <ul className="space-y-4">
                            {[
                                'Complete water treatment chemical range',
                                'Complete enzymes range',
                                'RO Pretreatment & Anti-Scalant Systems',
                                'Poly Electrolyte Formulations',
                                'Non-Woven Needle Punch Fabric Technology',
                                'Advanced Bioculture for ETP/STP',
                                'Sugar Speciality Chemicals',
                                'Corrosion Inhibitors',
                                'Paper <Chemicals></Chemicals>'
                            ].map(item => (
                                <li key={item} className="flex items-start gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-chem-500 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
