import typescript from "rollup-plugin-typescript2";
import builtins from "rollup-plugin-node-builtins";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  external: [
    "fs",
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],

  plugins: [
    typescript({
      typescript: require("typescript")
    }),
    builtins()
  ]
};
