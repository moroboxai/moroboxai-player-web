import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const defaultNodeResolveConfig = {
    "browser": true
};
const nodeResolvePlugin = nodeResolve(defaultNodeResolveConfig);

const typescriptConfig = (outDir) => {
    return {
        "compilerOptions": {
            "module": "esnext",
            "esModuleInterop": true,
            "allowSyntheticDefaultImports": true,
            "target": "es6",
            "noImplicitAny": false,
            "moduleResolution": "node",
            "resolveJsonModule": true,
            "sourceMap": false,
            "declaration": true,
            "declarationDir": outDir,
            "outDir": outDir,
            "baseUrl": ".",
            "strict": true,
            "stripInternal": true,
            "lib": ["es5", "es6", "dom"],
            "paths": {
                "*": ["node_modules/*", "src/types/*"]
            }
        },
        "include": ["src/**/*"]
    };    
}

const commonPlugins = (outDir) => [
  nodeResolvePlugin,
  typescript(typescriptConfig(outDir)),
  babel.default({
    presets: [['@babel/preset-env', { targets: '> 2%, not dead' }], '@babel/preset-react'],
    babelHelpers: 'bundled',
    exclude: 'node_modules/*'
  }),
  commonjs(),
];

const developmentPlugins = (outDir) => [
  ...commonPlugins(outDir),
  replace({
    'process.env.NODE_ENV': JSON.stringify('development'),
    'preventAssignment': true
  }),
];

const productionPlugins = (outDir) => [
  ...commonPlugins(outDir),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
    'preventAssignment': true
  }),
  terser({ mangle: false }),
];

export default [
  {
    input: 'src/index.ts',
    output: {
      exports: 'named',
      dir: 'lib/cjs/',
      format: 'cjs',
      preserveModules: true,
    },
    external: [/node_modules/],
    plugins: commonPlugins('lib/cjs'),
  },
  {
    input: 'src/index.ts',
    output: {
      exports: 'named',
      dir: 'lib/es/',
      format: 'es',
      preserveModules: true,
    },
    external: [/node_modules/],
    plugins: commonPlugins('lib/es'),
  },
  {
    input: 'src/index.ts',
    output: {
      exports: 'named',
      file: 'lib/umd/moroboxai-player-web.js',
      format: 'umd',
      name: 'MoroboxAIPlayer',
    },
    plugins: developmentPlugins('lib/umd'),
  },
  {
    input: 'src/index.ts',
    output: {
      exports: 'named',
      file: 'lib/umd/moroboxai-player-web.min.js',
      format: 'umd',
      name: 'MoroboxAIPlayer',
    },
    plugins: productionPlugins('lib'),
  },
];