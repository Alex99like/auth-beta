import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './assets/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        main: {
          black: '#232123',
          pink: '#FF3260'
        },
        gray: {
          hard: '#828082',
          base: '#FFFFFFB2',
          light: '#FFFFFF66'
        },
        custom: {
          zinc: '#2E2C2E',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'modal-opacity': {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        'modal-opacity-close': {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        'modal-scale': {
          from: { transform: 'scale(0.6) translateY(-30%)', opacity: '0' },
          to: { transform: 'scale(1) translateY(0)', opacity: '1' }
        },
        'modal-scale-close': {
          from: { transform: 'scale(1) translateY(0)', opacity: '1' },
          to: { transform: 'scale(0.6) translateY(-30%)', opacity: '0' }
        },
        'remove-modal': {
          from: { transform: 'scale(1.2) translateY(-30px)' , opacity: '0' },
          to: { transform: 'scale(1) translateY(0)' , opacity: '1' }
        },
        'remove-modal-close': {
          from: { transform: 'scale(1) translateY(0px)' , opacity: '1' },
          to: { transform: 'scale(0.7) translateY(-30px)' , opacity: '0' }
        },
        "icon-animation": {
          '0%': { opacity: '0', transform: 'scale(0.7)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.3)' }
        },
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
        "modal-close": "modal-opacity-close 0.5s forwards",
        "modal": "modal-opacity 0.5s forwards",
        "modal-scale-close": "modal-scale-close 0.4s forwards",
        "modal-scale": "modal-scale 0.4s forwards",
        "remove-modal": "remove-modal 0.4s forwards",
        "remove-modal-close": "remove-modal-close 0.4s forwards",
        "icon-animation": "icon-animation 0.8s forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config