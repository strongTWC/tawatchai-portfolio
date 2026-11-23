import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FAF8F5",
          soft: "#F3EFEA",
        },
        hairline: "#E8E2D9",
        ink: {
          DEFAULT: "#121212",
          soft: "#2A2A2A",
          deep: "#0D0D0D",
        },
        stone: {
          DEFAULT: "#6A6662",
          light: "#A6A099",
        },
        teal: {
          DEFAULT: "#005F60",
          hover: "#0A7273",
          wash: "rgba(0, 95, 96, 0.08)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Menlo", "monospace"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
