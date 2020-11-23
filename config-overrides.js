const { override, addWebpackAlias, addDecoratorsLegacy, addLessLoader, addWebpackModuleRule } = require('customize-cra');
const path = require('path')
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
        // "components": path.resolve(__dirname, 'src/components'),
    }),
    addDecoratorsLegacy(),
    addLessLoader(),
    addWebpackModuleRule({
        test: /\.svg$/, use: [
            { loader: 'svg-sprite-loader', options: {} },
            {
                loader: 'svgo-loader', options: {
                    plugins: [
                        // { removeNonInheritableGroupAttrs: true },
                        // { collapseGroups: true },
                        // { removeAttrs: { attrs: '(fill|stroke)' } },
                    ],
                }
            },
        ]
    })
)