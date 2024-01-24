import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#fbbf24",
        
          "secondary": "#ff5600",
        
          "accent": "#ff8400",
        
          "neutral": "#070a06",
        
          "base-100": "#f5f5f4",
        
          "info": "#be123c",
        
          "success": "#65a30d",
        
          "warning": "#dc2626",
        
          "error": "#ff0042",
        },
      },
    ],
  },
}
export default config
