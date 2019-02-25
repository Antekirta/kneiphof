module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            },
            
            extensions: ['.js', '.ts', '.vue', '.styl']
        },

        devServer: {
            watchOptions: {
                poll: true
            }
        }
    }
}