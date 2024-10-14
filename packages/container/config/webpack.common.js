module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,// to convert js to es5
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',// to convert js to es5
                    options: {
                        // presets: ['@babel/preset-env']
                        presets: [
                                '@babel/preset-react',// to convert jsx to js
                                '@babel/preset-env', // to convert es6 to es5
                            ],
                        plugins: [
                            '@babel/plugin-transform-runtime'// to convert async await
                        ]
                    }
                }

            }
            
        ]
    }

}