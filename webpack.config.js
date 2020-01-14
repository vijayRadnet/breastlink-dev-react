const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 25000
                    }
                }
                
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: "babel-loader",
            },
            
        ],
        
        
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendor",
              chunks: "initial",
            },
          },
        },
      },
    devServer: {
        stats: "errors-only",
        host: process.env.HOST,
        port: process.env.PORT,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Breastlink Demo",
            template: "src/index.html"
        })
    ],
    
}