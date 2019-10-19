const path = require('path');
module.exports ={
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    output: {
        filename: "weather-bundle.js"
    },

};