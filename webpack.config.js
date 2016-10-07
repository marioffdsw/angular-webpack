module.exports = {

    devtool: 'eval-source-map',

    entry: __dirname + '\\src\\main.js',
    output: {
        path: __dirname + '\\build',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: '.\\build',
        colors: true,
        historyApiFallback: true,
        inline: true
    },

    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /\.js$/, loader: 'babel', exclude: '/node_modules/' }
        ]
    }
}
