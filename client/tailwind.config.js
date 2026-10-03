/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                chem: { 50: '#f0fdfa', 100: '#ccfbf1', 500: '#14b8a6', 600: '#0d9488', 900: '#134e4a' },
                enzyme: { 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed' }
            },
            backgroundImage: {
                'molecular': "radial-gradient(circle at 1px 1px, rgba(20,184,166,0.15) 1px, transparent 0)",
                'enzyme-glow': "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)"
            },
            backgroundSize: { 'grid': '24px 24px' }
        }
    },
    plugins: [],
};
