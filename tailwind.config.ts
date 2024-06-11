import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'skillbridge-orange-50': '#FF9500',
        'skillbridge-orange-70': '#FFBF66',
        'skillbridge-orange-75': '#FFCA80',
        'skillbridge-orange-80': '#FFD499',
        'skillbridge-orange-90': '#FFEACC',
        'skillbridge-orange-95': '#FFF4E5',
        'skillbridge-orange-97': '#FFF9F0',
        'skillbridge-orange-99': '#FFFDFA',

        'skillbridge-white-90': '#E4E4E7',
        'skillbridge-white-95': '#F1F1F3',
        'skillbridge-white-97': '#F7F7F8',
        'skillbridge-white-99': '#FCFCFD',

        'skillbridge-grey-10': '#191919',
        'skillbridge-grey-15': '#262626',
        'skillbridge-grey-20': '#333333',
        'skillbridge-grey-30': '#4C4C4D',
        'skillbridge-grey-35': '#59595A',
        'skillbridge-grey-40': '#656567',
        'skillbridge-grey-60': '#98989A',
        'skillbridge-grey-70': '#B3B3B3',
      },
      gridTemplateColumns: {
        footerLinks: 'minmax(16rem, 1fr) minmax(16rem, 1fr) minmax(16rem, 1fr)',
        twoColumnWrapper: '1fr 1fr',
        threeColumnWrapper: '1fr 1fr 1fr',
      },
    },
  },
  plugins: [],
}
export default config
