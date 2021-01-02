const { override, addWebpackAlias, addDecoratorsLegacy, addLessLoader, addWebpackModuleRule } = require('customize-cra');
const path = require('path')
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
 
// const smp = new SpeedMeasurePlugin();
const rewireLess = require('react-app-rewire-less');



module.exports = override(
    addWebpackAlias({
        "@": path.resolve(__dirname, 'src'),
        "components": path.resolve(__dirname, 'src/components'),
        "hooks": path.resolve(__dirname, 'src/hooks/index.js'),
    }),
    addDecoratorsLegacy(),

    addWebpackModuleRule({
        test: /\.svg$/, use: [
            { loader: 'svg-sprite-loader', options: {} },
            {
                loader: 'svgo-loader', options: {
                    plugins: [
                    ],
                }
            },
        ]
    }),
    addLessLoader({
        lessOptions: {
           
        }
    }),
    (config) => {
        const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
        loaders[8].use.push({
            loader: 'style-resources-loader',
            options: {
                patterns: path.resolve(__dirname, 'src/styles/common.less')//全局引入公共的scss 文件
            }
        })

  
        return config
    }
)