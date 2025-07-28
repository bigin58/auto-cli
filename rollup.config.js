import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import externals from "rollup-plugin-node-externals";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';

export default defineConfig([
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'cjs' // 输出commonjs 文件
    },
    plugins: [
      nodeResolve(),
      externals({
        devDeps: false,
      }),
      commonjs(),
      json(),
      terser(),
      typescript(),
      copy({
        targets: [
          { src: 'fonts', dest: 'dist' }
        ]
      })
    ]
  }
])