import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/browser-entry.js',
  output: {
    file: 'dist/primetunnel.browser.js',
    format: 'umd', // Universal Module Definition, works in browser and Node.js
    name: 'PrimeTunnel', // Global variable name for browser
    sourcemap: true,
  },
  plugins: [
    resolve(), // Locates modules in node_modules
    commonjs(), // Converts CommonJS modules to ES6
  ],
};