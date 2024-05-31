import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
//import checker from 'vite-plugin-checker';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // checker({
    //   vueTsc: true,
    // }),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, './node_modules'),
      "@/*": resolve(__dirname, '"./src/core/*"'),
      "@types/*": resolve(__dirname, '"./src/types/*"'),
      "@env/*": resolve(__dirname, '"./src/env/*"'),
      "@cfg/*": resolve(__dirname, '"./src/cfg/*"'),
      "@assets/*": resolve(__dirname, '"./src/assets/*"'),
      "@tests/*": resolve(__dirname, '"./src/tests/*"'),
      "@dist/*": resolve(__dirname, '"./src/dist/*"'),
    },
    extensions: [
      '.js',
      '.d.ts',
      '.ts',
      '.vue',
    ],
  },
});