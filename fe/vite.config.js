import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
   watch: {
    usePolling: true,
   },
   host: true, // Here
   strictPort: true,
   port: 8080, 
 }})