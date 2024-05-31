/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        second: "850px",
        third: "650px"
      },
      backgroundColor: {
        bgSafron: "var(--bg-safron)",
        bgWhite: "var(--bg-white)",
        bgNeel: "var(--bg-neel)",
        bgGreen: "var(--bg-green)",
        bgGold: "var(--bg-gold)",
        bgMaroon: "var(--bg-Maroon)",
        bgMaroonL: "var(--bg-Maroon-light)",
        // buttons
        butDanger: "var(--button-danger)",
        butSuccess: "var(--button-success)",
        butSafron: "var(--button-safron)",
        butLink: "var(--button-link)",
        butPrimary: "var(--button-primary)",
        butWhite: "var(--button-white)",
        butMaroon: "var(--button-maroon)",
        butNeel: "var(--button-neel)",
      },
      colors: {
        textDanger: "var(--text-danger)",
        textNeel: "var(--text-neel)",
        textSuccess: "var(--text-success)",
        textSafron: "var(--text-safron)",
        textLink: "var(--text-link)",
        textPrimary: "var(--text-primary)",
        textWhite: "var(--text-white)",
        textMaroon: "var(--text-maroon)",
      },
      boxShadow: {
        shadowLight: "var(--box-shadowLight)",
        shadowDown: "var(--box-shadow-down)",
        shadowDownL: "var(--box-shadow-down2)"
      },
      borderColor: {
        bSafron: "var(--bg-safron)",
        bWhite: "var(--bg-white)",
        bNeel: "var(--bg-neel)",
        bGreen: "var(--bg-green)",
        bGold: "var(--bg-gold)",
        bMaroon: "var(--bg-Maroon)",
        bMaroonL: "var(--bg-Maroon-light)"
      },


      screens: {
        xs: "450px"
      },


    },
  },
  plugins: [],
}
