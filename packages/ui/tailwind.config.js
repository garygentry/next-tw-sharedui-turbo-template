/** @type {import('tailwindcss').Config} */

const sharedConfig = require("@my-app/tailwind-config");

module.exports = {
  ...sharedConfig,
  content: ["./**/*.{js,ts,jsx,tsx,mdx}"],
};
