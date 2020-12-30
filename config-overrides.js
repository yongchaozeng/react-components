const { override, addWebpackAlias, addDecoratorsLegacy, addLessLoader, addWebpackModuleRule } = require('customize-cra');
const path = require('path')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
 
const smp = new SpeedMeasurePlugin();
// const rewireLess = require('react-app-rewire-less');

// module.exports = override(
//   addWebpackAlias({
//     "@": path.resolve(__dirname, 'src')
//   }),
//   addDecoratorsLegacy(), 
// );

// const resolve = path.resolve
// module.exports = override(

//     addWebpackAlias({
//         ['@']: resolve('src')
//     }),
//     (config, env) => {
//         config = rewireLess.withLoaderOptions({
//             modifyVars: { "@primary-color": "#9F35FF" },
//         })(config, env);
//         return config
//     }
// )


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
            // javascriptEnabled: true,
            // modifyVars: {
            //     '@primary-color': '#1DA57A'
            // }
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

        
        // loaders[0].include = path.resolve(__dirname,'src')
        loaders[0].exclude = /node_modules/
        
        // loaders[1].include = path.resolve(__dirname,'src')
        loaders[1].exclude = /node_modules/
        
        // loaders[2].include = path.resolve(__dirname,'src')
        loaders[2].exclude = /node_modules/
        // loaders[3].include = path.resolve(__dirname,'src')
        loaders[3].exclude = /node_modules/
        // loaders[4].include = path.resolve(__dirname,'src')
        loaders[4].exclude = /node_modules/
        // loaders[5].include = path.resolve(__dirname,'src')
        loaders[5].exclude = /node_modules/
        // loaders[6].include = path.resolve(__dirname,'src')
        loaders[6].exclude = /node_modules/
        return smp.wrap(config)

        // return config
    }
)