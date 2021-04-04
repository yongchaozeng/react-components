const Didact = {
  render,
  createElement,
};

function createDom(element) {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode(element)
      : document.createElement(element.type);

  let isProperty = (item) => item !== 'children';

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((prop) => {
      // dom.setAttribute(prop,element.props.prop)
      dom[prop] = element.props[prop];
    });

  return dom;
  //   element.props.children.forEach((child) => {
  //     render(child, dom);
  //   });
  //   container.appendChild(dom);
}

function createElement(type, props, ...children) {
  return {
    type: type,
    props: {
      ...props,
      children: children.map((item) =>
        typeof item === 'object' ? item : createTextElement(item),
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }

  requestIdleCallback(workLoop);
}
let nextUnitOfWork = null;

function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
  }

  const elements = fiber.props.children;
  let index = 0;
  let prevSibling = null;
  while (index < elements.length) {
    const element = elements[index];
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    };
    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }
    i++;
    prevSibling = newFiber;
  }
}
requestIdleCallback(workLoop);

function render(element, container) {
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [element],
    },
  };
}

const container = document.querySelector('#root');
const element = createElement('h1', { title: 'foo' }, 'Hello');

Didact.render(element, document.querySelector('#root'));
