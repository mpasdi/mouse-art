import { defineConfig } from "vite";
import path from "path";
import { globalLessVariable } from "./src/config/cssConfig";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "index",
      // the proper extensions will be added
      fileName: "index",
    },
  },

  plugins: [
    // other plugins...
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: globalLessVariable(),
        javascriptEnabled: true,
      },
    },
  },
  server: {
    port: 3002,
  },
});
