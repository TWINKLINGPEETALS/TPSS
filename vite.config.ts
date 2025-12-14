import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/TPSS/",   // 👈 THIS LINE FIXES WHITE SCREEN
});
