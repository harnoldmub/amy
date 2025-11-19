import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: "#0c2137",
                accent: "#eb0029",
                "off-white": "#f2eeee",
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
            },
        },
    },
    plugins: [],
};
export default config;
