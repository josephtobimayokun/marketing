/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0c0f",
        panel: "#12151a",
        panel2: "#171b21", // one step lighter -- for layered cards (sidebar vs. content, nested rows)
        panelborder: "#22262e",
        panelborder2: "#2c313b",
        mint: "#3ee6b0",
        mintDim: "#28a67c",
        coral: "#ff7a59",
        muted: "#8b93a1",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(62,230,176,0.15), 0 0 24px rgba(62,230,176,0.08)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.35 },
        },
        flowDash: {
          to: { strokeDashoffset: -24 },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s ease-in-out infinite",
        flowDash: "flowDash 1.2s linear infinite",
      },
    },
  },
  plugins: [],
};
