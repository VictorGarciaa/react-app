const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const rulesFortHTML = {
    test: /\.html$/i,
    use: ["html-loader"],
  }

const ruleForStyles = {
    test: /\.css$/,
    use: ['style-loader','css-loader']
}

const rulesForJavascript={
    test: /\.js$/,
    loader: 'babel-loader',
    options:{
        presets:[
            [
            '@babel/preset-react',
            {
                runtime: 'automatic', //'Classic'
            }
        ]
        ]
    }
}

const rules = [rulesForJavascript,ruleForStyles,rulesFortHTML]


module.exports={
    output:{
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'src/index.html'})
    ],
    module:{rules},
}