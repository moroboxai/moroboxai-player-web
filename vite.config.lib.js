import { defineConfig } from "vite";
import { version } from "./package.json";
import path, { resolve } from "path";

export default defineConfig({
    define: {
        __VERSION__: version
    },
    build: {
        outDir: resolve(__dirname, "lib"),
        lib: {
            entry: resolve(__dirname, "src", "index.ts"),
            name: "MoroboxAIPlayer",
            formats: ["cjs", "es", "umd"],
            fileName: (format) => {
                switch (format) {
                    case "cjs":
                        return `cjs/index.cjs`;
                    case "es":
                        return `es/index.js`;
                    case "umd":
                        return `umd/moroboxai-player-web.min.js`;
                }
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
