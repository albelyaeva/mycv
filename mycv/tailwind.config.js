/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        typewriter: 'typewriter 3s steps(20, end) forwards',
        blink: 'blink 0.8s steps(2, start) infinite',
      },
    },
  },
    plugins: [],
}

