const path = require("path");
module.exports ={
    entry:"./src/index.js",
    output:{
        path: path.resolve(__dirname, "build"),
        filename: "bundel.js"
    },
    mode: "development",
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
      },
    //   module: {
    //     rules: [
    //       {
    //         test: /\.(png|jpe?g|gif)$/i,
    //         use: [
    //           {
    //             loader: 'file-loader',
    //           },
    //         ],
    //       },
    //     ],
    //   },
};