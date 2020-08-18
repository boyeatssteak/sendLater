module.exports = {
    entry: './js/main.js',
    output: {
        path: __dirname+'/build',
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /mode_modules/,
                use: ['babel-loader']
            }
        ]
    },
    mode: 'development'
}