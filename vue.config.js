module.exports = {
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.ts', '.vue'],
		},

		devServer: {
			watchOptions: {
				poll: true
			}
		}
	}
}