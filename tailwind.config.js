/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        heading: ["Integral Bold", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
      colors: {
        background: '#02191D',
        headerBg: '#05252C66',
        mainBg: '#041E23',
        ticketCenter: '#041E23',
        borderColor: '#197686',
        smborderColor: '#0E464F',
        gradient: 'radial-gradient(52.52% 32.71% at 50% 97.66%, hsla(210, 100%, 50%, 0.2) 0%, hsla(210, 100%, 50%, 0) 100%)'

        //gradient: 'radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(77, 176, 255, 0.2) 0%, rgba(77, 176, 255, 0) 100%)'

        //gradient: 'radial-gradient(52.52% 32.71% at 50% 97.66%, oklch(62.4% 0.145 190 / 0.2) 0%, oklch(62.4% 0.145 190 / 0) 100%)',
      },
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: ["light"], // DaisyUI light theme
  },
};
