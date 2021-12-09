/*
 * @Author: zxx
 * @Date: 2021-09-30 09:01:37
 * @LastEditors: zxx
 * @LastEditTime: 2021-12-09 14:52:53
 * @FilePath: \styleguidist-vuecli3-demo\styleguide.config.js
 * @Description: some description
 */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// const docSiteUrl = process.env.DEPLOY_PRIME_URL || 'https://vue-styleguidist.github.io'
const docSiteUrl = 'https://skura23.github.io/styleguidist-vuecli3-demo/'

/** @type import("vue-styleguidist").Config */
module.exports = {
	// set your styleguidist configuration here
	title: 'jem前端组件库',
	defaultExample: true,
	// components: 'src/components/**/[A-Z]*.vue',
	components: 'packages/**/src/index.vue',
	ribbon: {
		text: 'Back to github',
		url: `${docSiteUrl}`
	},
	styleguideDir: 'docs',
	// sections: [
	//   {
	//     name: 'First Section',
	//     components: 'src/components/**/[A-Z]*.vue'
	//   }
	// ],
	webpackConfig: {
		plugins: process.argv.includes('--analyze') ? [new BundleAnalyzerPlugin()] : []
	},
	codeSplit: true,
	skipComponentsWithoutExample: true
}
