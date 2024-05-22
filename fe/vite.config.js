import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.FRONTEND_PORT || 4000, // Usa el valor de la variable de entorno PORT
  },
  plugins: [react()],
});
