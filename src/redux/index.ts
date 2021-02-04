import createStore from './createStore'
import warning from './utils/warning'

const isCrushed = function () { }
if (process.env.NODE_ENV !== 'production' &&
    typeof isCrushed.name === 'string' &&
    isCrushed.name !== 'isCrushed') {
    warning(
        'You are currently using minified code outside of NODE_ENV === "production". ' +
        'This means that you are running a slower development build of Redux. ' +
        'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' +
        'or setting mode to production in webpack (https://webpack.js.org/configuration/mode/) ' +
        'to ensure you have the correct code for your production build.'
    )
}



export {
    createStore
}

