import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: false,
      padding: "15px", //1 rem = 20px
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)"
    },
    screens: {
      'sm': '640px',    // Small screens (tablets, 640px and up)
      'md': '768px',    // Medium screens (desktops, 768px and up)
      'lg': '960px',   // Large screens (large desktops, 1024px and up)
      'xl': '1200px',   // Extra large screens (larger desktops, 1280px and up)
    },

    extend: {
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187',
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config