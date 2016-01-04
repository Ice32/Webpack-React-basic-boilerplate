module.exports = {
    entry:"./js/main.js",
    output: {
        filename: "bundle.js"
    },
    watch:true,
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            exclude: [/node_modules/, /jquery-2.1.4.js/]
        }]
    },
    resolve:{
        alias:{
            "jquery":"../jquery-2.1.4.js"
        }
    }
};