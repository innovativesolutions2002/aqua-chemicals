import { motion } from 'framer-motion';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageCircle,
    Building2
} from 'lucide-react';

export default function Contact() {
    return (
        <div className="w-full bg-slate-50 min-h-screen pb-20">

            {/* =========================
                HEADER BANNER
            ========================== */}
            <div className="bg-[#032b44] py-16 md:py-24 text-center relative overflow-hidden">

                <div className="absolute inset-0 bg-molecular opacity-10"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-display mb-4">
                        Get In Touch
                    </h1>

                    <p className="text-chem-100 text-lg max-w-2xl mx-auto px-4">
                        We are here to answer any questions you may have about
                        our chemical and enzyme solutions.
                    </p>
                </motion.div>
            </div>


            {/* =========================
                CONTACT CONTENT
            ========================== */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


                    {/* =========================
                        CARD 1 - REGISTERED OFFICE
                    ========================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    >

                        {/* Icon */}
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                            <MapPin className="w-7 h-7 text-[#032b44]" />
                        </div>

                        {/* Heading */}
                        <h3 className="text-xl font-bold text-[#032b44] mb-4">
                            Registered Office
                        </h3>

                        {/* Address */}
                        <address className="not-italic text-gray-600 leading-relaxed space-y-2">

                            <p className="font-semibold text-gray-800">
                                AQUA CHEMICALS & ENZYMES
                            </p>

                            <p>
                                215 Vasundhara Colony,
                            </p>

                            <p>
                                Tonk Road, Jaipur,
                            </p>

                            <p>
                                Rajasthan, 302018
                            </p>

                            <p className="pt-2 text-sm text-gray-500 flex items-center gap-2">
                                <Building2 className="w-4 h-4" />
                                India
                            </p>

                        </address>

                        {/* Google Maps */}
                        <a
                            href="https://www.google.com/maps/place/Jain+Mandir,+210,+Gali+No+4,+Kirti+Nagar,+Vasant+Vihar,+Tonk+Phatak,+Jaipur,+Rajasthan+302018/@26.8664748,75.7827564,15z/data=!3m1!4b1!4m6!3m5!1s0x396db5ce7822a4c1:0x4a4b77cc367673e4!8m2!3d26.8664756!4d75.7930561!16s%2Fg%2F11knbmwcb3?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center text-sm font-bold text-chem-600 hover:text-chem-700 transition"
                        >
                            View on Google Maps →
                        </a>

                    </motion.div>


                    {/* =========================
                        CARD 2 - PHONE NUMBERS
                    ========================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    >

                        {/* Icon */}
                        <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                            <Phone className="w-7 h-7 text-green-600" />
                        </div>

                        {/* Heading */}
                        <h3 className="text-xl font-bold text-[#032b44] mb-4">
                            Call Us
                        </h3>

                        <div className="space-y-4">


                            {/* Primary Sales */}
                            <div>

                                <p className="text-sm text-gray-500 mb-1">
                                    Primary Sales
                                </p>

                                <a
                                    href="tel:+919414067366"
                                    className="relative inline-block text-lg font-bold text-gray-800 hover:text-green-600 transition whitespace-nowrap group"
                                >
                                    +91-9414067366

                                    {/* Call Now Badge */}
                                    <span
                                        className="
                                            absolute
                                            left-full
                                            top-1/2
                                            -translate-y-1/2
                                            ml-3
                                            z-20
                                            opacity-0
                                            group-hover:opacity-100
                                            transition-opacity
                                            text-xs
                                            bg-green-100
                                            text-green-700
                                            px-2
                                            py-0.5
                                            rounded
                                            whitespace-nowrap
                                            pointer-events-none
                                        "
                                    >
                                        Call Now
                                    </span>

                                </a>

                            </div>


                            {/* Other Enquiries */}
                            <div className="border-t border-gray-100 pt-4">

                                <p className="text-sm text-gray-500 mb-1">
                                    Other Enquiries
                                </p>

                                <a
                                    href="tel:+919828681899"
                                    className="relative inline-block text-lg font-bold text-gray-800 hover:text-green-600 transition whitespace-nowrap group"
                                >
                                    +91-9828681899

                                    {/* Call Now Badge */}
                                    <span
                                        className="
                                            absolute
                                            left-full
                                            top-1/2
                                            -translate-y-1/2
                                            ml-3
                                            z-20
                                            opacity-0
                                            group-hover:opacity-100
                                            transition-opacity
                                            text-xs
                                            bg-green-100
                                            text-green-700
                                            px-2
                                            py-0.5
                                            rounded
                                            whitespace-nowrap
                                            pointer-events-none
                                        "
                                    >
                                        Call Now
                                    </span>

                                </a>

                            </div>


                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/919414067366"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold transition flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Chat on WhatsApp
                            </a>

                        </div>

                    </motion.div>


                    {/* =========================
                        CARD 3 - EMAILS
                    ========================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1"
                    >

                        {/* Icon */}
                        <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                            <Mail className="w-7 h-7 text-purple-600" />
                        </div>

                        {/* Heading */}
                        <h3 className="text-xl font-bold text-[#032b44] mb-4">
                            Email Us
                        </h3>

                        <div className="space-y-4">


                            {/* General Enquiries */}
                            <div>

                                <p className="text-sm text-gray-500 mb-1">
                                    General Enquiries
                                </p>

                                <a
                                    href="mailto:info@aquachemicals.org"
                                    className="relative inline-block text-base lg:text-lg font-bold text-gray-800 hover:text-purple-600 transition whitespace-nowrap group"
                                >
                                    info@aquachemicals.org

                                    {/* Send Email Badge */}
                                    <span
                                        className="
                                            absolute
                                            left-0
                                            top-full
                                            mt-1
                                            z-20
                                            opacity-0
                                            group-hover:opacity-100
                                            transition-opacity
                                            text-xs
                                            bg-purple-100
                                            text-purple-700
                                            px-2
                                            py-0.5
                                            rounded
                                            whitespace-nowrap
                                            pointer-events-none
                                        "
                                    >
                                        Send Email
                                    </span>

                                </a>

                            </div>


                            {/* Sales & Orders */}
                            <div className="border-t border-gray-100 pt-4">

                                <p className="text-sm text-gray-500 mb-1">
                                    Sales & Orders
                                </p>

                                <a
                                    href="mailto:sales@aquachemicals.org"
                                    className="relative inline-block text-base lg:text-lg font-bold text-gray-800 hover:text-purple-600 transition whitespace-nowrap group"
                                >
                                    sales@aquachemicals.org

                                    {/* Send Email Badge */}
                                    <span
                                        className="
                                            absolute
                                            left-0
                                            top-full
                                            mt-1
                                            z-20
                                            opacity-0
                                            group-hover:opacity-100
                                            transition-opacity
                                            text-xs
                                            bg-purple-100
                                            text-purple-700
                                            px-2
                                            py-0.5
                                            rounded
                                            whitespace-nowrap
                                            pointer-events-none
                                        "
                                    >
                                        Send Email
                                    </span>

                                </a>

                            </div>


                            {/* Management */}
                            <div className="border-t border-gray-100 pt-4">

                                <p className="text-sm text-gray-500 mb-1">
                                    Management
                                </p>

                                <a
                                    href="mailto:jayantrajvanshi@aquachemicals.org"
                                    className="relative inline-block text-base lg:text-lg font-bold text-gray-800 hover:text-purple-600 transition whitespace-nowrap group"
                                >
                                    jayantrajvanshi@aquachemicals.org

                                    {/* Send Email Badge */}
                                    <span
                                        className="
                                            absolute
                                            left-0
                                            top-full
                                            mt-1
                                            z-20
                                            opacity-0
                                            group-hover:opacity-100
                                            transition-opacity
                                            text-xs
                                            bg-purple-100
                                            text-purple-700
                                            px-2
                                            py-0.5
                                            rounded
                                            whitespace-nowrap
                                            pointer-events-none
                                        "
                                    >
                                        Send Email
                                    </span>

                                </a>

                            </div>

                        </div>

                    </motion.div>

                </div>


                {/* =========================
                    BUSINESS HOURS
                ========================== */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 bg-[#032b44] rounded-2xl p-8 text-white text-center shadow-xl relative overflow-hidden"
                >

                    {/* Decorative Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-chem-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">

                        {/* Clock Icon */}
                        <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                            <Clock className="w-8 h-8 text-chem-400" />
                        </div>

                        {/* Hours */}
                        <div className="text-left">

                            <h4 className="text-xl font-bold mb-1">
                                Business Hours
                            </h4>

                            <p className="text-chem-100">
                                Monday - Saturday:{' '}
                                <span className="text-white font-semibold">
                                    9:00 AM - 7:00 PM
                                </span>
                            </p>

                            <p className="text-chem-100 text-sm mt-1">
                                Sunday: Closed
                            </p>

                        </div>

                    </div>

                </motion.div>

            </div>
        </div>
    );
}