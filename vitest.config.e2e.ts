import swc from "unplugin-swc";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["**/*.e2e-spec.ts"],
		globals: true,
		root: "./",
		includeSource: ["src/**/*.ts"],
		exclude: ["node_modules", "dist", "data", "test"],
		setupFiles: ["./test/setup-e2e.ts"],
	},
	plugins: [
		tsConfigPaths(),
		swc.vite({
			module: { type: "es6" },
		}),
	],
});
