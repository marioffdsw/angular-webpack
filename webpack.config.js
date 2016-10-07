var webpack = require( 'webpack' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

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
        inline: true,
        hot: true
    },

    module: {
        loaders: [
            { test: /\.json$/,  loader: 'json' },
            { test: /\.js$/,    loader: 'babel', exclude: '/node_modules/' },
            { test: /\.css$/,   loader: 'style!css?modules!postcss' },
            { test: /.html$/,   loader: 'html' }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "\\src\\index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    postcss: [
        require( 'autoprefixer' )
    ]
}
