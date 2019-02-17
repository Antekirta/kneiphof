module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.ts', '.vue', '.styl']
        },

        devServer: {
            watchOptions: {
                poll: true
            }
        }
    }
}