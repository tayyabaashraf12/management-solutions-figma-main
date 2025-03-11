import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Add Roboto
        koulen: ["Koulen"], // Add Koulen
        inter: ["Inter"],
        poppins: ["Poppins"],
      },
      opacity: {
        "58": "0.58",
        value: "0.40",
      },
    },
  },
  plugins: [],
} satisfies Config;
