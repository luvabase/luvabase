import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/index.ts"],
  platform: "neutral",
  target: "es2020",
  sourcemap: true,
  dts: { sourcemap: true },
})
