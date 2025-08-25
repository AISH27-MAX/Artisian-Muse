import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom earthy colors for Artisan Muse
        earth: {
          50: "hsl(35 50% 95%)",
          100: "hsl(35 40% 90%)",
          200: "hsl(30 35% 80%)",
          300: "hsl(25 30% 70%)",
          400: "hsl(20 25% 60%)",
          500: "hsl(18 85% 58%)", // Primary terra cotta
          600: "hsl(15 80% 45%)",
          700: "hsl(12 75% 35%)",
          800: "hsl(10 70% 25%)",
          900: "hsl(8 65% 15%)",
        },
        clay: {
          50: "hsl(25 30% 95%)",
          100: "hsl(25 25% 85%)",
          200: "hsl(25 20% 75%)",
          300: "hsl(25 15% 65%)",
          400: "hsl(25 15% 55%)",
          500: "hsl(25 35% 25%)", // Secondary brown
          600: "hsl(25 40% 20%)",
          700: "hsl(25 45% 15%)",
          800: "hsl(25 50% 12%)",
          900: "hsl(25 55% 8%)",
        },
        gold: {
          50: "hsl(42 95% 95%)",
          100: "hsl(42 90% 85%)",
          200: "hsl(42 85% 75%)",
          300: "hsl(42 88% 65%)", // Accent gold
          400: "hsl(42 80% 55%)",
          500: "hsl(42 75% 45%)",
          600: "hsl(42 70% 35%)",
          700: "hsl(42 65% 25%)",
          800: "hsl(42 60% 15%)",
          900: "hsl(42 55% 8%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
