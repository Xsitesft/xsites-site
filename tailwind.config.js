/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        success: "#10B981",
        bg: "#F9FAFB",
        text: "#111827",
        "text-muted": "#6B7280",
        border: "#E5E7EB",
      },
    },
  },
  plugins: [],
}