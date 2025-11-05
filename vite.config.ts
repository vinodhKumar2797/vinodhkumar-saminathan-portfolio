import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // 👇 IMPORTANT: base must be top-level for GitHub Pages project sites
  base: mode === "production" ? "/vinodhkumar-saminathan-portfolio/" : "/",

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: "::",
    port: 8080,
  },

  // (optional) keep default outDir=dist; GitHub Actions will upload this
  build: {
    outDir: "dist",
  },
}));
