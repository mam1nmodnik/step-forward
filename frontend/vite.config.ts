import solid from "solid-start/vite";
import { defineConfig } from "vite";
import devtools from 'solid-devtools/vite'

export default defineConfig({
  plugins: [
    devtools({
      /* features options - all disabled by default */
      autoname: true, // e.g. enable autoname
      locator: {
        targetIDE: 'vscode',
        componentLocation: true,
        jsxLocation: true,
      },
    }),
    solid({
      // currently HMR breaks displaying components
      // https://github.com/solidjs/solid-refresh/pull/41 will fix this
      hot: false,
    }),
  ],
});
