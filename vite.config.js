import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Use dynamic base so GitHub Pages project sites serve assets correctly under /<repo>/
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
});
