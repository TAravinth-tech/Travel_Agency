import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, "index.html"),
        services: path.resolve(__dirname, "services/index.html"),
        tourPackages: path.resolve(__dirname, "tour_and_tariff/index.html"),
        tariff: path.resolve(__dirname, "tariff/index.html"),
        about: path.resolve(__dirname, "about/index.html"),
        contact: path.resolve(__dirname, "contact/index.html"),
      },
    },
  },
  server: { port: 5173 },
});

