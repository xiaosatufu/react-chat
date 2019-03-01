// const {
//     injectBabelPlugin
// } = require('react-app-rewired');
// const {
//     override,
//     addDecoratorsLegacy,
//     useBabelRc
//     //   disableEsLint,
//     //   addBundleVisualizer,
//     //   addWebpackAlias,
//     //   adjustWorkbox
// } = require("customize-cra");
// module.exports = function override(config, env) {
//     addDecoratorsLegacy()
//     // disableEsLint(),
//     useBabelRc()
//     config = injectBabelPlugin(['import', {
//         libraryName: 'antd-mobile',
//         style: 'css'
//     }], config);
//     return config;
// };

const {
    override,
    fixBabelImports,
    addDecoratorsLegacy
    // addLessLoader,
} = require("customize-cra");


module.exports = override(
    addDecoratorsLegacy(),
    fixBabelImports("import", {
        libraryName: "antd-mobile",
        libraryDirectory: "es",
        style: 'css' // change importing css to less
    }),
    // addLessLoader({
    //   javascriptEnabled: true,
    //   modifyVars: { "@primary-color": "#1DA57A" }
    // })
);