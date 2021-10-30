import path from "path";
import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { eslint } from "rollup-plugin-eslint"; // eslint插件
import ts from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import { globalName as name } from "./config";
const getPath = (_path) => path.resolve(__dirname, _path);

const formats = ["amd", "cjs", "es", "iife", "umd", "system"];

const extensions = [".js", ".ts", ".tsx"];

// ts
const tsPlugin = ts({
  tsconfig: getPath("./tsconfig.json"), // 导入本地ts配置
  extensions,
});

// eslint
const esPlugin = eslint({
  throwOnError: true,
  include: ["src/**/*.ts"],
  exclude: ["node_modules/**", "lib/**"],
});

export default [
  {
    input: "./src/index.ts",
    output: formats.map((format) => ({
      file: `dist/rgm.${format}.js`,
      format,
      name,
      exports: "auto",
    })),
    plugins: [
      // 将node_modules文件夹下的内容一起打包
      nodeResolve({
        extensions,
      }),
      // 解析cjs模块， 例如react打包后的内容是cjs的，如果不引入该模块，则无法解析
      commonjs(),
      babel({
        presets: [["@babel/preset-env"]],
        // plugins: ["@babel/plugin-transform-runtime"],
        babelHelpers: "bundled",
      }),
      esPlugin,
      tsPlugin,
      json(),
      process.env.NODE_ENV === "production" && terser(),
    ],
  },
];
