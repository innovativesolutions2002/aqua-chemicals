import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [products, setProducts] = useState([]);

    // Fetch products from Render API
    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL;

        fetch(`${API_URL}/api/products`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`API Error: ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                setProducts(
                    data.sort((a, b) => a.sortOrder - b.sortOrder)
                );
            })
            .catch((error) => {
                console.error('Failed to fetch footer products:', error);
            });
    }, []);

    return (
        <footer className="bg-[#021626] text-gray-400 pt-20 pb-10 w-full border-t border-white/5">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-24">

                {/* Main Footer Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Logo / Company Column */}
                    <div className="sm:col-span-2">
                        <img
                            src="/logo.png"
                            alt="Aqua Chemicals & Enzymes Logo"
                            className="h-20 w-auto object-contain mb-6 brightness-110"
                        />

                        <p className="text-lg leading-relaxed max-w-md">
                            Re-inventing sustainable chemistry through precision
                            engineering and eco-friendly manufacturing processes
                            since 1993.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 font-display">
                            Quick Links
                        </h4>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-chem-400 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-chem-400 transition"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/reseller"
                                    className="hover:text-chem-400 transition"
                                >
                                    Reseller
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-chem-400 transition"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 font-display">
                            Products
                        </h4>

                        <ul className="space-y-3">
                            {products.map((product) => {
                                const isExternal = Boolean(product.externalLink);

                                return (
                                    <li key={product._id}>
                                        {isExternal ? (
                                            <a
                                                href={product.externalLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-chem-400 transition"
                                            >
                                                {product.name}
                                            </a>
                                        ) : (
                                            <Link
                                                to={`/products/${product.slug}`}
                                                className="hover:text-chem-400 transition"
                                            >
                                                {product.name}
                                            </Link>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-white/10 pt-12 mb-12">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Address */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-4 font-display">
                                Contact
                            </h4>

                            <div className="flex items-start gap-3">
                                <span className="text-chem-500 text-lg">
                                    📍
                                </span>

                                <span className="leading-relaxed">
                                    215 Vasundhara Colony,
                                    <br />
                                    Tonk Road, Jaipur, 302018
                                </span>
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-4 font-display">
                                Phone
                            </h4>

                            <div className="flex items-center gap-3">
                                <span className="text-chem-500 text-lg">
                                    📞
                                </span>

                                <a
                                    href="tel:+919414067366"
                                    className="hover:text-chem-400 transition"
                                >
                                    +91-9414067366
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-4 font-display">
                                Email
                            </h4>

                            <div className="flex items-center gap-3">
                                <span className="text-chem-500 text-lg">
                                    ✉️
                                </span>

                                <a
                                    href="mailto:info@aquaandenzymes.com"
                                    className="hover:text-chem-400 transition break-all"
                                >
                                    info@aquaandenzymes.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

                    <p className="text-center md:text-left">
                        &copy; {new Date().getFullYear()} Aqua Chemicals &
                        Enzymes. All rights reserved.
                    </p>

                    <p className="text-center md:text-right">
                        Designed for Chemical Excellence
                    </p>
                </div>
            </div>
        </footer>
    );
}