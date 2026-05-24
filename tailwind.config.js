/** * Konfigurasi Tailwind CSS (Original Stitch AI Design)
 * Memuat seluruh palet warna kustom untuk mode gelap, tipografi, dan sistem spasi.
 */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tertiary-fixed-dim": "#e9c349",
        "on-tertiary-container": "#614c00",
        "on-error": "#690005",
        "secondary-container": "#0566d9",
        "surface-tint": "#2fd9f4",
        "on-primary": "#00363e",
        "error-container": "#93000a",
        "inverse-surface": "#e4e1e7",
        "outline": "#859397",
        "secondary-fixed-dim": "#adc6ff",
        "on-surface": "#e4e1e7",
        "on-primary-fixed-variant": "#004e5a",
        "outline-variant": "#3c494c",
        "on-tertiary": "#3c2f00",
        "on-tertiary-fixed-variant": "#574500",
        "surface": "#131317",
        "secondary-fixed": "#d8e2ff",
        "surface-container-highest": "#353439",
        "primary-fixed-dim": "#2fd9f4",
        "surface-bright": "#39393d",
        "primary-fixed": "#a2eeff",
        "primary-container": "#22d3ee",
        "surface-container-low": "#1b1b1f",
        "on-error-container": "#ffdad6",
        "on-background": "#e4e1e7",
        "tertiary-container": "#e3bd44",
        "on-secondary-fixed-variant": "#004395",
        "secondary": "#adc6ff",
        "primary": "#8aebff",
        "inverse-on-surface": "#303034",
        "on-surface-variant": "#bbc9cd",
        "on-tertiary-fixed": "#241a00",
        "background": "#131317",
        "surface-container-lowest": "#0e0e12",
        "surface-container-high": "#2a292e",
        "tertiary-fixed": "#ffe088",
        "surface-dim": "#131317",
        "error": "#ffb4ab",
        "on-secondary-fixed": "#001a42",
        "on-primary-container": "#005763",
        "tertiary": "#ffd968",
        "on-secondary": "#002e6a",
        "surface-container": "#1f1f23",
        "on-secondary-container": "#e6ecff",
        "inverse-primary": "#006877",
        "on-primary-fixed": "#001f25",
        "surface-variant": "#353439"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        xl: "32px",
        base: "4px",
        "section-gap": "64px",
        gutter: "24px",
        xs: "4px",
        md: "16px",
        sm: "8px",
        lg: "24px"
      },
      fontFamily: {
        "label-caps": ["Inter", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "display-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-base": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "body-bold": ["Inter", "sans-serif"],
        code: ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.15em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "display-lg": ["60px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "body-base": ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "headline-lg-mobile": ["24px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-bold": ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "600" }],
        code: ["14px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }]
      }
    }
  },
  plugins: [],
}