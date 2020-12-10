
const React = {
    createElement(type, props, ...children) {
        // 核心逻辑不复杂，将参数都塞到一个对象上返回就行
        // children也要放到props里面去，这样我们在组件里面就能通过this.props.children拿到子元素
        return {
            type,
            props: {
                ...props,
                children
            }
        }
    },
    render(vDom, container) {
        let dom = null;
        if (typeof vDom !== 'object') {
            dom = document.createTextNode(vDom)
        } else {
            dom = document.createElement(vDom.type)
        }
        if (vDom.props) {
            Object.keys(vDom.props).filter((item) => {
                return item !== 'children'
            }).forEach((item, idx) => {
                dom[item] = vDom.props[item]
            })
        }
        if (vDom.props && vDom.props.children && vDom.props.children.length > 0) {
            vDom.props.children.forEach((item) => {
                React.render(item, dom)
            })
        }
        container.appendChild(dom)
    }
}




export default React