import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      include: /\.(js|jsx|ts|tsx)$/,
      bundledDev: true,
    }),
  ],
  oxc: {
    include: /src\/.*\.(js|jsx|ts|tsx)$/,
  },
  base: "/Bakery_website/",
});