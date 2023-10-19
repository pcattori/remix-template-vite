import { defineConfig } from "vite";
import { unstable_vitePlugin as remix } from "@remix-run/dev";

export default defineConfig({
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  plugins: [remix()],
});
