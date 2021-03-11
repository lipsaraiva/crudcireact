var path = require('path');

module.exports = {
    //Entrada componentes
    entry: './app/components/app.js',
    //Saída componentes
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    }
}