/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                greenBg: '#12424A',
                brightGreen: '#46E5A0',
                brightGreenHover: '#46E5A0',
                darkGreen: '#12424A',
                white: '#FFFFFF'
            },
            spacing: {
                sm: '0.625em',
                DEFAULT: '1.25em',
                lg: '2em',
                xl: '3.125em'
            },
            fontFamily: {
                segoeUI: ["'Segoe UI'", 'sans-serif'],
                tropikal: 'tropikal'
            },
            fontSize: {
                DEFAULT: '1rem',
                md: '1.25rem',
                xmd: '1.5rem',
                lg: '3rem',
                title: '9.375rem'
            },
            borderColor: {
                borderLight: 'rgba(88, 227, 163, 0.1)',
                borderHover: 'rgba(70, 229, 160, 0.6)',
            },
            borderRadius: {
                DEFAULT: '10px',
                lg: '0 30px 30px 0'
            }


        },
    },
    plugins: [],
}