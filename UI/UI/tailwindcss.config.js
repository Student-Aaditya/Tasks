/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#93c5fd",
          DEFAULT: "#3b82f6",
          dark: "#1e40af",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/images.jpeg'),url('/images.png'),url('/images.jpg)",
      },
    },
  },
  plugins: [],
}
