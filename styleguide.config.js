const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const docSiteUrl = process.env.DEPLOY_PRIME_URL || 'https://vue-styleguidist.github.io'

/** @type import("vue-styleguidist").Config */
module.exports = {
	// set your styleguidist configuration here
	title: 'jem前端组件库',
	defaultExample: true,
	// components: 'src/components/**/[A-Z]*.vue',
	components: 'packages/**/src/index.vue',
	ribbon: {
		text: 'Back to examples',
		url: `${docSiteUrl}/Examples.html`
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
