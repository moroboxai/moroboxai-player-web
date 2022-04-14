'use strict'

const path = require('path');
const gulp = require('gulp');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');

const webpackConfig = (lib, output, options, library, prod) => ({
    context: path.resolve(__dirname, 'src'),
    entry: './index.ts',
    mode: prod ? 'production' : 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: output,
        path: path.resolve(__dirname, lib),
        ...library
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    ...options
});

gulp.task('es', () => {	
	return gulp.src('./src/index.ts')
        .pipe(gulpWebpack(webpackConfig(
            'lib/es',
            'index.js',
            {
                experiments: {
                    outputModule: true
                }
            },
            {
                library: {
                    type: "module"
                }
            },
            true
        ), webpack))
        .pipe(gulp.dest('lib/es'));
});

gulp.task('umd-dev', () => {	
	return gulp.src('./src/index.ts')
    	.pipe(gulpWebpack(webpackConfig(
            'lib/umd',
            'moroboxai-player-web.js',
            {},
            {
                library: {
                    type: 'umd',
                    name: 'MoroboxAIPlayer',
                }
            }
        ), webpack))
        .pipe(gulp.dest('lib/umd'));
});

gulp.task('umd', () => {	
	return gulp.src('./src/index.ts')
    	.pipe(gulpWebpack(webpackConfig(
            'lib/umd',
            'moroboxai-player-web.min.js',
            {},
            {
                library: {
                    type: 'umd',
                    name: 'MoroboxAIPlayer',
                }
            },
            true
        ), webpack))
        .pipe(gulp.dest('lib/umd'));
});

gulp.task('build', gulp.series('es', 'umd-dev', 'umd'));