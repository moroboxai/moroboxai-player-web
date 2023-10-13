import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    base: "/moroboxai-player-web/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
