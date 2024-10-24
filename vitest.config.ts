// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom', // Simulate the browser environment
        globals: true, // Allow global `expect` without import
        setupFiles: './tests/setup.ts',
    },
});
