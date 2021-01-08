

const React = {
    createElement(type, props, children) {
        return {
            type: type,
            props: { ...props, children }
        }
    },

    renderDom(el, container) {
        debugger
        if (el) {

        }
    }
}
export default React