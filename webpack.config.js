module.exports = {
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                use: "file-loader"
            },
            {
                test: /\.ttf/,
                use: "file-loader"
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"] 
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                use: "babel-loader"
            }
        ]
    }
}