function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: withOpacityValue('--color-accent'),
        back: withOpacityValue('--color-back'),
        danger: withOpacityValue('--color-danger'),
        front: withOpacityValue('--color-front'),
        primary: withOpacityValue('--color-primary'),
        secondary: withOpacityValue('--color-secondary'),
      }
    },
  },
  plugins: [],
}
