module.exports = {
	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},

	chainWebpack(conf) {
		// When using lerna and simlinks,
		// mode some modules that should be ignored are not
		// we add them here to avoid errors
		const path = require('path')

		const eslintRule = conf.module.rule('eslint')
		if (eslintRule) {
			eslintRule.exclude.add(path.resolve(__dirname, '../../packages'))
		}

		const jsRule = conf.module.rule('js')
		if (jsRule) {
			jsRule.exclude.add(path.resolve(__dirname, '../../packages'))
		}

		// 扩展 webpack 配置，使 packages 加入编译
		conf.module
			.rule('js')
			.include
			.add('/packages')
			.end()
			.use('babel')
			.loader('babel-loader')
	}
}