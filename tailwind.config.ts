import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { dmxdtBlack:'#050505', dmxdtIvory:'#F5F1E8', dmxdtMuted:'#A49B90', dmxdtCopper:'#D77C5A' } } },
  plugins: [],
};
export default config;
